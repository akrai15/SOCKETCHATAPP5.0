import User from "../models/user.model.js";
export const getUsersForSidebar=async(req,res)=>{
    try{
        const  loggedinuser=req.user._id;
        const filteredusers=await User.find({_id:{$ne:loggedinuser}}).select("-password");


        res.status(200).json(filteredusers);


    }
    catch(error){
        console.log("error getting users for sidebar",error);
        res.status(500).json("problem getting users for sidebar");
    }
}