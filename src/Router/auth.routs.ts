import express,{Request,Response} from "express";
const router = express.Router()
import {login,signup,loginotp,signupotp,resetotp}  from '../controller/auth.controller'




router.post("/login",login)
router.post("/signup",signup)
router.get("/login/otp",loginotp)
router.get("/signup/otp",signupotp)
router.get("/reset/otp",resetotp)



export default  router