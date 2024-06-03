
const express=require("express")
const {getUserProfile,registerUser,loginUser}=require('../controllers/userControllers');
const validateTokenHandler = require("../middleware/validateTokenHandler");

const router=express.Router();


router.route("/register").post(registerUser)

router.route("/login").post(loginUser)


router.route("/profile").get(validateTokenHandler, getUserProfile);

module.exports=router