const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')




// desc - Register user
// route - POST /api/user/register
// access - public
const registerUser = asyncHandler(async (req, res) => {
    console.log("okay10");
    const { username, password, role, email } = req.body;
   
    // Validate input fields
    if (!username || !password || !role || !email) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    

    // Check if the user with the provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        res.status(400);
        throw new Error("Email already exists");
    }
    

    const hashPassword= await bcrypt.hash(password, 10);
    console.log(hashPassword)

    // Create a new user
    const user = await User.create({
        username,
        email,
        password :hashPassword,
        role
    });

    console.log("User created successfully");

    // Send a success response
    res.status(201).json({
        _id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
    });
});



// desc-POST login user
// route - POST /api/user/login
// access - public

const loginUser= (asyncHandler(async(req,res)=>{
    const { password, email } = req.body;

    // Validate input fields
    if ( !password ||  !email) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const user=await User.findOne({email});

    if(user &&  (await bcrypt.compare(password, user.password))){
        console.log("ok match")

        const accessToken = jwt.sign({
            user : {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN_SECRETE, { expiresIn: "5min" });
        res.status(200).json({ accessToken });
    }
    else {
        res.status(401);
        console.log("noy okay")
        throw new Error("Email or password is not valid");
    }

}))

// desc- Get main Profile page
// route :api/user/profile
// access - private

const getUserProfile=asyncHandler(async(req,res)=>{
    res.status(200);
    res.json({message:"Welcome to Profile"})
})




module.exports = { getUserProfile, registerUser,loginUser };
