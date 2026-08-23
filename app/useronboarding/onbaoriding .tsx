"use client"

import { useState, useEffect} from "react"
import {useUser} from "@clerk/nextjs"
import axios from "axios"
import { useRouter } from "next/navigation"
import OnboardingLoader from "./onboardingloader"
import OnboardingForm  from "./onbaordingfrom"
export default function  Onbaoriding  () {
    const router= useRouter()
    const {user,isLoaded} = useUser();
    const [isChecking,setIsChecking]= useState(true);
         console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/onboardingstatus`)
    useEffect(()=>{

    if(!isLoaded ||!user) return;
    const CheckOnboarding= async()=>{
        try{
            const res= await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/onboardingstatus`,{
                clerkid:user?.id,
            })
              console.log(res)
            if(res.data.data.onboarding){
                 router.replace("/dashboard") 
            }
              setIsChecking(false)  

        }catch(error:any){

            console.log(error.response.data)

        }
    }
    CheckOnboarding()

    },[user,isLoaded])

 return (
   isChecking ? <OnboardingLoader/> :<>
  <OnboardingForm/>

   
   
   </>
  )
}
