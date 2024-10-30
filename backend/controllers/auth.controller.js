import bcryptjs from "bcryptjs";

import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../Utils/generateToken.js";


export const signup = async(req,res)=>{
    try{
        const {fullName,username,password,confirmPassword,gender} = req.body;

        if(password != confirmPassword)
        {
            return res.status(400).json({error : "Passwords dont match"})<<endl;
        }
        const user = await User.findOne({username});

        if(user)
        {
            return res.status(400).json({error: "Username already exists"});
        }

        // HASH PASSSWORD HERE
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt)

    

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username = ${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username = ${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            confirmPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic

        });

        if(newUser)
        {
            // Generate JWT token here
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();
           return res.status(201).json({
                _id : newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })  
        }else
        {
          return  res.status(400).json({error:"Invalid user data"});
        }
       

    }catch(error)
    {
        console.log("Error in signup controller ",error.message);
       return  res.status(500).json({error: "Internal Server Error"});
    }

}

export const login = async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcryptjs.compare(password,user?.password || "");

        if(!user || !isPasswordCorrect)
        {
            return res.status(400).json({error:"Invalid Credentials"});
        }
        generateTokenAndSetCookie(user._id,res);
        return res.status(200).json({
            _id : user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        })
    }
    catch(error)
    {
        console.log("Error in signup controller ",error.message);
       return  res.status(500).json({error: "Internal Server Error"});
    }
}

export const logout = async(req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out successfully"});
    }
    catch(error)
    {
        console.log("Error in signup controller ",error.message);
       return  res.status(500).json({error: "Internal Server Error"});
    }
}
