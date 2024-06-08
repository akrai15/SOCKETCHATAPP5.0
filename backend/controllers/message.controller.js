import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage=async(req,res)=>{
    try{
        const {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;
    
        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},

        })
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId]
            });
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            message,
        });
        if(newMessage){
            conversation.messages.push(newMessage._id);
            
        }
   
        await newMessage.save();
        await conversation.save();
         
        res.status(200).json(newMessage);


    }
    catch(error){
        console.log("error sending message",error);
        res.status(500).json("problem sending message");
    }
};



export const getMessages=async(req,res)=>{
    try{
        const {id:userTochatid}=req.params;
        const senderId=req.user._id;
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userTochatid]}
        }).populate("messages");
        if(!conversation){
            return res.status(200).json([]);
        }
        res.status(200).json(conversation.messages);
    }   
    catch(error){
        console.log("error getting messages",error);
        res.status(500).json("problem getting messages");
    }
}