import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute= async (req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({message:"unauthorized"});
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message:"unauthorized invalid token"});
        }
        const user= await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(401).json({message:"user not found"});
        }
        req.user=user;
        next();

    }
    catch(error){
        console.log("error protecting route",error);
        res.status(500).json({message:"protect route problem"});
    }
}

export default protectRoute;