"use client"
import axios from "axios"
import {useSearchParams}  from "next/navigation"
import {useState,useEffect} from "react"

 type data={
    title:string,
    subject:string,
    forsem:string,
    forstream:string,
    fileurl:string,
    createdAt:string,
    uploader:{
        username:string,
        avatarUrl:string,
        level:number
    }
 }
export default function Serach_Result(){
const searchParams=useSearchParams()
const subject=searchParams.get("subject")
console.log(subject)
const [data,setdata]=useState<data[]>([])
const [error,seterror]=useState<string>()
const [loading,setLoading]=useState(true)

useEffect(()=>{
    
        const SeracheResults=async()=>{
             try {
                const res= await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/serach`,{
                    params:{
                        subject
                    }
                    })
        setdata(res.data.data)
         console.log(res.data.data)
                
             } catch (error) {
                if(error instanceof axios.AxiosError){
                    seterror(error.response?.data.message)
                }
                else{
                    seterror("Something went wrong")
                }
                
             }
            
        }

        SeracheResults()
      
   

},[subject])


return(
    <div>
        <h1 className="font-semibold text-white">{subject}</h1>
    </div>
)
}