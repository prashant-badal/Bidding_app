
const express=require("express")
const {getUserProfile,registerUser,loginUser}=require('../controllers/userControllers')

const router=express.Router();

router.route("/profile").get(getUserProfile)

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

module.exports=router