import 'dotenv/config'
import Express from "express"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

import { UserModel } from "../db";
const SECRET = process.env.SECRET


const router = Express() ;

interface signupParam {name:string,email:string,passwd:string};

router.post('/signup', async (req,res)=> {
    try{
        const { name , email, passwd }:signupParam = req.body ;
        if (!name || !email || !passwd){
            return res.status(400).json({success: false, msg: 'All fields not provided'}) ;
        }
    
        // Check if user already exists
        const findUser = await UserModel.findOne({email}) ;
        if (findUser){
            return res.status(403).json({success: false, msg: 'Account already exists'}) ;
        }
    
        // This is a new user, hash the password
        const hashedPassword = await bcrypt.hash(passwd,10) ;
    
        const newUser = await UserModel.create({name,email,passwd: hashedPassword}) ;
        await newUser.save();
        
        // Generate token for client
        const payload = {
            id: newUser._id,
            email: email
        }
    
        const token = jwt.sign(payload,SECRET) ;
        return res.status(200).json({success: true, msg: 'Account successfully created', token: token}) ;
    }
    catch(err) {
        console.log(":: Error in Signup (auth.ts) ::\n",err) ;
        res.status(500).json({success: false, msg: 'Internal server error'}) ;
    }
})

export default router