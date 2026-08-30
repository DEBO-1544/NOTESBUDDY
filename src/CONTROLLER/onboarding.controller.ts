import {prisma} from '../DB/db.ts';
import type {Request, Response} from 'express';
import { ErrorApi } from '../UTILITES/error.api.ts';
import { SucessApi } from '../UTILITES/sucess.api.ts';
const Onboarding= async(req:Request,res:Response)=>{

    try{
      const {  institutename, presentyear, stream, semester, }= req.body;
      const{clerkid}=req.body
      if(typeof clerkid!=="string"){
         console.log("i am the problem")
         return res.status(500).json(new ErrorApi("id not got",500,{
          info:"id not got from params ",

         }))
      }
      let { avatarUrl}= req.body;

      if(!institutename || !presentyear || !stream || !semester ){
         console.log("i am the problem")
      
         return res.status(400).json(new ErrorApi("Incomplete data provided", 400, null));
      }
       const User= await prisma.user.update({
          where:{
            clerkid
          },
          data:{
            institutename,
            presentyear,
            stream,
            semester,
            onboarding:true
          },select:{
            institutename:true,
            presentyear:true,
            stream:true,
            semester:true,
            onboarding:true,
          }
       })


       

      
       if(!avatarUrl){
        avatarUrl= avatarUrl||"https://nbylpeyipmxdofvgixjb.supabase.co/storage/v1/object/public/AVATAR/user.png"
       }

      
        return res.status(201).json(new SucessApi("User upadated successfully", 201, User))


    }catch(error:any){
       console.log(error)
         if (error.code === "P2002") {
      return res.status(409).json(new ErrorApi("User already exists", 409, "Username, email, or Clerk ID already exists"));
    }

        return res.status(500).json(new ErrorApi("Internal server error", 500,{
          info:error
        }))
        
    }

}
export {Onboarding}