
const express=require("express")
const {getUserProfile,registerUser}=require('../controllers/userControllers')

const router=express.Router();

router.route("/profile").get(getUserProfile)

router.route("/register").post(registerUser)

module.exports=router