"use client";

import axios from "axios";
import { ShieldUser, HelpCircle } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Verification() {
  const { user  ,isLoaded} = useUser();
  const router = useRouter();
  useEffect(() => {
     if(!isLoaded || !user) return;
    const Verifcation = async () => {
      try {
      
       const res = await axios.post(
  `${process.env.NEXT_PUBLIC_API_URL}/api/v1/newuser`,{
    clerkid:user?.id,
    username:user?.username,
    email:user?.primaryEmailAddress?.emailAddress,

    name:user?.fullName,
    
  }
);
      
       if(res.data.data.user.onboarding){
        router.push("/dashboard")
       }
       else if (res.data.data.user.onboarding === false || res.data.data.user.onboarding===undefined){
        
        router.push("/useronboarding")
       }
      } catch (error) {
       console.log(error)
      }
    };
    Verifcation()
  }, [isLoaded, user]);
  

  return (
    <>
      <main className="relative z-10 flex min-h-screen items-center justify-center bg-slate-50 px-6">
        {/* Background Blur */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <div className="relative w-full max-w-md">
          {/* Logo */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-indigo-600">
              NotesBuddy
            </h1>
          </div>

          {/* Verification Card */}
          <div className="rounded-3xl border border-indigo-100 bg-white/70 p-8 shadow-xl backdrop-blur-xl">
            {/* Loader */}
            <div className="mb-8 flex justify-center">
  <div className="relative h-24 w-24">
    {/* Animated Ring */}
    <div className="absolute inset-0 animate-ping rounded-full bg-indigo-200 opacity-30" />

    {/* Background Circle */}
    <div className="absolute inset-4 rounded-full bg-indigo-100" />

    {/* Icon */}
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 shadow-lg">
        <ShieldUser size={28} className="text-white" />
      </div>
    </div>
  </div>
</div>
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900">
                Securing your session...
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Verifying your credentials for secure flow.
              </p>
            </div>

            {/* Status */}
            <div className="mt-10 space-y-4 border-t border-slate-200 pt-6"></div>
          </div>

          {/* Help */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer">
            <HelpCircle size={16} />
            <span>Need help? Contact support</span>
          </div>
        </div>
      </main>
    </>
  );
}
