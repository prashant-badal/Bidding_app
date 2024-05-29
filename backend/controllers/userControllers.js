
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
// desc- Get user profile
// route -GET /api/user/profile
// @access - public

const getUserProfile=(req,res)=>{
    res.status(200).send("Welcome to User Profile")
}


// desc-register user
// route -POST /api/user/register
// @access - public
const registerUser=(asyncHandler(async(req,res)=>{
    const {username,password,role,email}=req.body;
    console.log( username);
    
    if(!username||!password || !role ||!email){
        res.status(400)
        throw new Error("All field are Mandatory")
    }


    const user = await User.create({
        username,
        email,
        password,
        role
    })
    console.log(`user created ${user}`) 


}))

module.exports={getUserProfile,registerUser}