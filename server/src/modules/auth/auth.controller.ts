import { NextFunction, Request, Response } from "express"
import { authService } from "./auth.service";

 const registerUser = async(req:Request, res:Response, next:NextFunction)=>{
    const data = req.body;
    const result = await authService.registerUser(data);
   return  res.status(200).json({
        success:true,
        message:"User registered successfully",
        data:result
    })
}
export const authController = {
    registerUser
}