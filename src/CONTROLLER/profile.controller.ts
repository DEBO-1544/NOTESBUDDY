import {prisma} from "../DB/db.ts"
import type{Request,Response} from "express"
import { SucessApi } from "../UTILITES/sucess.api.ts"
import { ErrorApi } from "../UTILITES/error.api.ts"

const Profile =async(req:Request,res:Response)=>{
  try{
     const {clerkid}=req.query
     if(!clerkid){
        res.status(400).json(new ErrorApi("bad request ",400,{
            info:"bad request"
        }))
     }
     const User_Exist=  await prisma.user.findUnique({
        where:{
            clerkid:clerkid as string
        },
        select:{
             username:true,
             
             stream:true,
             semester:true,
             createdAt:true,
             institutename:true,
             presentyear:true,
             level:true,
             Stage:true,
             Notes:{
                select:{
                    id:true,
                    title:true,
                    subject:true,
                    forsem:true,
                    forstream:true,
                    fileurl:true,
                    createdAt:true,
                    updatedAt:true,
                    description:true
                },  
                   orderBy:{
                     createdAt:"desc"
                   }
                 
             }
        },
          
     })
    if (!User_Exist){
        return res.status(404).json(new ErrorApi("user not found",404,{
            info:"user not found"
        }))
    }
    return res.status(200).json(new SucessApi("user found,profile details matched",200,{
        info:User_Exist
    }))
  }catch(error){
     console.log(error)
     return res.status(500).json(new ErrorApi("user profile fetch failed",500,{
        info:error
     }))

  }
}
export default Profile
