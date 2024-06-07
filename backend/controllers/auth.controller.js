import User from "../models/user.model.js";
import bycrptjs from 'bcryptjs';
import generateTokenandSetCookie from "../utils/generateToken.js";






export const signup=async (req,res)=>{
    try{
        const {fullName,username,password,confirmPassword,gender,profilePic}=req.body;
        if(password!=confirmPassword){
            return res.status(400).json({message:"passwords do not match"});
        }
        const user=await User.findOne({username});
        if(user){
            return res.status(400).json({message:"username already exists"});
        }


        const salt=await bycrptjs.genSalt(10);
        const hashedPassword=await bycrptjs.hash(password,salt);


        const boyprofilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlprofilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`;

        const newUser=new User({fullName,username,password:hashedPassword,gender,profilePic:gender==="male"?boyprofilePic:girlprofilePic});
        

        if(newUser){
             generateTokenandSetCookie(newUser._id,res);
            await newUser.save();
            res.status(201).json({message:"user created successfully"});

        }

      
    }
    catch(err){
        console.log("error creating user",err);
        res.status(500).json({message:"internal server error"});
    
    }

}



export const login= async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user=await  User.findOne({username});
        const isPassword=await bycrptjs.compare(password,user?.password || "");
        if(!user || !isPassword){
            return res.status(400).json({message:"invalid credentials"});
        }
        generateTokenandSetCookie(user._id,res);
        res.status(200).json({message:"login successfull"});

        

    }
    catch(error){
        console.log("error logging in",error);
        res.status(500).json({message:"internal server error"});
    

    }
   
}







export const logout= async (req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"logout successfull"});

    }
    catch(error){
        console.log("error logging out",error);
        res.status(500).json({message:"internal server error"});

    }

}














