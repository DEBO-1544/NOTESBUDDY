import { ErrorApi } from "../UTILITES/error.api.ts";
import { SucessApi } from "../UTILITES/sucess.api.ts";
import { prisma } from "../DB/db.ts"
import type{Request,Response} from "express"
const CheckOnboarding= async(req:Request,res:Response)=>{
    try{
        const {clerkid}= req.body
          if(!clerkid){
             res.status(400).json( new ErrorApi("clerkid not found",400,{
              info:"clerkid not found,Bad Request"
             }))
          }
        const IsUser= await prisma.user.findUnique({
            where:{
                clerkid
                
            }, select:{
                 onboarding:true,
            }
        })
         if(!IsUser){
            return res.status(404).json(new ErrorApi("user not found",404,{
                info:"user not found"
            }))
         }

        return res.status(200).json(new SucessApi("user found onboarded status",200,{
            info:IsUser
        }))

    }catch(error:any){
           console.log(error)
        return res.status(500).json(new ErrorApi("user onboarding check failed",500,{
            info:error
        }))

    }

}

export {CheckOnboarding}