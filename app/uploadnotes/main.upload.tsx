"use client";

import Link from "next/link";
import { Upload, Info, Undo2 } from "lucide-react";
import { CircleCheckBig } from 'lucide-react';

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const SEM = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth",
];

const STREAM = [
  "CSE",
  "CSBS",
  "ECE",
  "EE",
  "ME",
  "CE",
];

export default function UploadNotes() {
   const router=useRouter()
   const {user,isLoaded}=useUser()
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [stream, setStream] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploadicon,setUploadicon]=useState(false)
  const[Fileeroor,SetFileerror]=useState(false)
  const [maxfileerror,setmaxfileerror]=useState(false)
  const [error,setError]=useState("")
  const [progerss,setprogerss]=useState(0)
  const [confirm ,setconfirm]=useState(false)
  const IsvalidFrom= title!=="" && subject!=="" && semester!=="" && stream!=="" && description.trim()!=="" && file!==null
 const HandleFile=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const Upload_File=e.target.files?.[0]
        if(!Upload_File){
          setUploadicon(false)
               return ;
        }
        if(Upload_File.size > 50*1024*1024){
           setmaxfileerror(true)
           
           return
        }
        if(Upload_File.type !== "application/pdf"){
          SetFileerror(true)
          return 
        }
        setUploadicon(true)
        setFile(Upload_File)
        setmaxfileerror(false)
        SetFileerror(false)
        


 }

const Handle_Form=async(e:React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault()
    try{
        if( !user){
            setError("Authorization Error")
            return 
        }
        const Formdata= new FormData
        Formdata.append("title",title)
        Formdata.append("subject",subject)
        Formdata.append("forsem",semester)
        Formdata.append("forstream",stream)
        Formdata.append("description",description)
        Formdata.append("pdf",file!)
        Formdata.append("clerkid",user?.id)

      const Send_Data= await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/uploadnotes`,Formdata,{
        onUploadProgress(e){
            if(e.total){
                const uploadprogerss= Math.round((e.loaded / e.total) * 100)
                setprogerss(uploadprogerss)
            }
        }
      })

      console.log(Send_Data)
      setconfirm(true)
      
      router.replace("/dashboard")
      



    }
    catch(error:any){
       console.log(error.response?.data)

      setError(`${error.response.data.message}`)

    }
     /* finally{
       setDescription("")
       setFile(null)
       setmaxfileerror(false)
       SetFileerror(false)
       setprogerss(0)
       setUploadicon(false)
       setTitle("")
       setSubject("")
       setSemester("")
       setStream("")
       setconfirm(false)
      } */
   
}

  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <main className="px-4 pb-20 pt-24 md:px-0">
        <div className="mx-auto max-w-[800px] animate-in fade-in slide-in-from-bottom-4 duration-700">

          {/* Header */}
          <div className="mb-10">
            <h2 className={`${confirm ? "text-green-500" : "text-[#0b1c30]"} mb-2 text-[32px] font-bold leading-[1.2] tracking-[-0.02em]  md:text-[48px] md:leading-[1.1]`}>
              {confirm ?"You are successfully uploaded the notes":"Share Knowledge"}
            </h2>

            <p className="text-[16px] leading-[1.6] text-[#464555]">
              Help your peers succeed by uploading your high-quality academic
              notes.
            </p>
          </div>

          {/* Main Upload Card */}
          <div className="mb-10 overflow-hidden rounded-xl border border-[#3525cd]/10 bg-white shadow-sm">

            <div className="p-6 md:p-10">

              {/* File Upload */}
              <div
                id="drop-zone"
                className="group mb-6 flex cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-[#c7c4d8]/50 bg-[#eff4ff]/30 p-10 transition-all hover:border-[#3525cd]/50"
              >
                <label className="block w-fit cursor-pointer">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4f46e5]/10 transition-transform duration-300 group-hover:scale-110">
                    {
                      uploadicon ? (
                        <CircleCheckBig
                          size={40}
                          className="text-[#28b31e]"
                        />
                      ) : (
                        <Upload
                          size={40}
                          className="text-[#3525cd]"
                        />
                      )
                    }
                  </div>

                  <input
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    onChange={HandleFile}
                   
                  />
                </label>

                <div className="text-center">
                  <p className="text-[18px] font-semibold leading-[1.4] text-[#0b1c30]">
                    Drag and drop your PDF here
                  </p>

                  <p className="mt-1 text-[14px] leading-[1.5] text-[#464555]">
                    or click to browse from your device
                  </p>
                </div>

                <p className={`${maxfileerror?"text-red-500":"text-[12px] font-semibold leading-none tracking-[0.05em] text-[#c7c4d8]"}`}>
                  {maxfileerror ?"FILE SIZE MUST NOT BE LARGER THEN 50MB":"MAX FILE SIZE 50MB"}
                </p>
              </div>

              {/* Progress Section */}
              <div className="mb-6 ">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`${file==null ?"hidden":"text-[14px] font-semibold text-[#0b1c30]"}`}>
                     {file?.name || ""} 
                     {Fileeroor}
                    </span>
                  </div>

                  <span className="text-[12px] font-semibold tracking-[0.05em] text-[#3525cd]">
                   
                  </span>
                </div>

                <div  className={` h-2  w-full overflow-hidden rounded-full bg-[#dce9ff]`}>
                  {`${progerss}%`}
                  <div
                    className="h-full bg-[#3525cd] transition-all duration-300"
                    style={{ width: `${progerss}%` }}
                  />
                </div>
              </div>

              {/* Form */}
              <form onSubmit={Handle_Form}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                {/* Left Column */}
                <div className="space-y-6">

                  {/* Title */}
                  <div className="flex flex-col gap-1">
                    <label className="px-1 text-[12px] font-semibold leading-none tracking-[0.05em] text-[#464555]">
                      Note Title
                    </label>

                    <input
                      name="title"
                      type="text"
                      onChange={(e)=>{
                         setTitle(e.target.value)
                      }}
                      placeholder="e.g., Advanced Linear Algebra - Midterm Prep"
                      className="w-full rounded-lg border-0 bg-[#eff4ff] px-4 py-3 text-[14px] leading-[1.5] text-[#0b1c30] outline-none placeholder:text-[#c7c4d8] transition-all focus:ring-2 focus:ring-[#4f46e5]"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1">
                    <label className="px-1 text-[12px] font-semibold leading-none tracking-[0.05em] text-[#464555]">
                      Subject
                    </label>

                    <input
                      name="subject"
                      type="text"
                      onChange={(e)=>setSubject(e.target.value)}
                      placeholder="OOPS, DSA,DBMS..."
                      className="w-full rounded-lg border-0 bg-[#eff4ff] px-4 py-3 text-[14px] leading-[1.5] text-[#0b1c30] outline-none placeholder:text-[#c7c4d8] transition-all focus:ring-2 focus:ring-[#4f46e5]"
                    />
                  </div>

                </div>

                {/* Right Column */}
                <div className="space-y-6">

                  {/* Semester + Stream */}
                  <div className="grid grid-cols-2 gap-4">

                    {/* Semester */}
                    <div className="flex flex-col gap-1">
                      <label className="px-1 text-[12px] font-semibold leading-none tracking-[0.05em] text-[#464555]">
                        Semester
                      </label>

                      <select
                        name="semester"
                        onChange={(e) => setSemester(e.target.value)}
                        
                        className="w-full appearance-none rounded-lg border-0 bg-[#eff4ff] px-4 py-3 text-[14px] leading-[1.5] text-[#0b1c30] outline-none transition-all focus:ring-2 focus:ring-[#4f46e5]"
                      >
                        {SEM.map((sem) => (
                          <option key={sem} value={sem}>
                            {sem}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Stream */}
                    <div className="flex flex-col gap-1">
                      <label className="px-1 text-[12px] font-semibold leading-none tracking-[0.05em] text-[#464555]">
                        Stream
                      </label>

                      <select
                        name="stream"
                        onChange={(e) => setStream(e.target.value)}
                        className="w-full appearance-none rounded-lg border-0 bg-[#eff4ff] px-4 py-3 text-[14px] leading-[1.5] text-[#0b1c30] outline-none transition-all focus:ring-2 focus:ring-[#4f46e5]"
                      >
                        {STREAM.map((stream) => (
                          <option key={stream} value={stream}>
                            {stream}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Description */}
                  <div className="flex h-full flex-col gap-1">
                    <label className="px-1 text-[12px] font-semibold leading-none tracking-[0.05em] text-[#464555]">
                      Short Description
                    </label>

                    <textarea
                      name="description"
                      onChange={(e)=> (setDescription(e.target.value))}
                      placeholder="Briefly explain what's covered..."
                      className="h-[52px] w-full resize-none rounded-lg border-0 bg-[#eff4ff] px-4 py-3 text-[14px] leading-[1.5] text-[#0b1c30] outline-none placeholder:text-[#c7c4d8] transition-all focus:ring-2 focus:ring-[#4f46e5]"
                    />
                  </div>

                </div>

             
            </div>

            {/* Footer Action */}
            <div className="flex flex-col items-center justify-between gap-4 border-t border-[#c7c4d8]/10 bg-[#eff4ff]/50 px-6 py-4 md:flex-row">

              {/* Info */}
              <div className="flex items-center gap-2">
                <Info
                  size={18}
                  className="text-[#712ae2]"
                />

                <p className="text-[14px] leading-[1.5] text-[#464555]">
                  Uploading adds{" "}
                  <span className="font-bold text-[#712ae2]">
                    Level Up
                  </span>{" "}
                  to your profile.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex w-full gap-4 md:w-auto">

                <Link
                  href="/dashboard"
                  className="flex-1 md:flex-initial"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f8f9ff] px-6 py-3 font-semibold text-[#3525cd] transition-all hover:bg-red-500 hover:text-white active:scale-95"
                  >
                    GO BACK
                    <Undo2 size={18} />
                  </button>
                </Link>

                <button
                  type="submit"
                   disabled={!IsvalidFrom}
                  className="flex-1 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl bg-gradient-to-r from-[#3525cd] to-[#712ae2] px-10 py-3 font-bold text-white shadow-lg shadow-[#3525cd]/20 transition-all hover:scale-[1.02] active:scale-95 md:flex-initial"
                >
                  Upload Notes
                </button>
                 {error && (
      <p className="text-sm text-red-500">
        {error}
      </p>
    )}
              

              </div>
              </div>
              </form>
              
            </div>
            
          </div>
          
        </div>
      </main>
     
    </div>
  );
}