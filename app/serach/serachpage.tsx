"use client"
import axios from "axios"
import {useSearchParams}  from "next/navigation"
import {useState,useEffect} from "react"
import Link from "next/link";
import {useUser} from "@clerk/nextjs"
import NoResult from "./noresult"
import {
  Search,
  Bell,
  Bookmark,
  X,
  Verified,
  Download,
  ThumbsUp,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";
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
const {user,isLoaded}=useUser()
const [data,setdata]=useState<data[]>([])
const [error,seterror]=useState<string>()
const [loading,setLoading]=useState(true)
const [input,setinput]=useState<string>(subject || "")
useEffect(()=>{
    
        const SeracheResults=async()=>{
             try {
                const res= await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/serach`,{
                    params:{
                        subject
                    }
                    })
                   setdata(res.data.data.data)
                    console.log(res.data.data.data)
                
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

useEffect(()=>{
    
        const SeracheResults=async()=>{
             try {
                const res= await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/serach`,{
                    params:{
                        subject:input
                    }
                    })
                   setdata(res.data.data.data)
                    console.log(res.data.data.data)
                
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
      
   

},[input])



return(
    <div>
         <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]">

      {/* Top Navbar */}
      <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-[#c7c4d8]/20 bg-[#f8f9ff]/80 px-4 shadow-sm backdrop-blur-xl md:px-8">

  <div className="flex items-center gap-8">

    {/* Logo */}
    <Link
      href="/dashboard"
      className="text-xl font-bold tracking-tight text-[#3525cd]"
    >
      NotesBuddy
    </Link>

    {/* Navigation */}
    <nav className="hidden items-center gap-6 lg:flex">

      <Link
        href="/dashboard"
        className="text-sm font-semibold cursor-pointer text-[#464555] transition-colors hover:text-[#3525cd]"
      >
        Dashboard
      </Link>

      <Link
        href="/uploadnotes"
        className="text-sm font-semibold cursor-pointer text-[#464555] transition-colors hover:text-[#3525cd]"
      >
        Upload
      </Link>

      <Link
        href="/profile"
        className="text-sm font-semibold cursor-pointer text-[#464555] transition-colors hover:text-[#3525cd]"
      >
        Profile
      </Link>

    </nav>

    {/* Search */}
    <div className="hidden w-96 items-center rounded-full border border-[#c7c4d8]/20 bg-[#eff4ff] px-4 py-2 transition-all duration-200 focus-within:border-[#3525cd] focus-within:bg-white focus-within:shadow-sm md:flex">

      <Search
        size={18}
        className="mr-2 text-[#464555]"
      />

      <input
        onChange={(e) => setinput(e.target.value)}
        type="text"
        placeholder="Search notes, courses..."
        value={input}
        className="w-full border-none bg-transparent p-0 text-sm text-[#0b1c30] outline-none placeholder:text-[#464555] focus:ring-0"
      />

      <button
        onClick={() => setinput("")}
        className="ml-2 cursor-pointer text-[#464555] transition-colors hover:text-[#3525cd]"
      >
        <X size={18} />
      </button>

    </div>

  </div>

  {/* Profile */}
  <div className="flex items-center gap-3">

    <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#3525cd]/20">
      {user?.imageUrl && (
        <img
          src={user.imageUrl}
          alt="Student Profile"
          className="h-full w-full object-cover"
        />
      )}
    </div>

  </div>

</header>

      {/* Main Canvas */}
      <main className="mt-16 min-h-screen p-4 md:p-8">

        {/* Header */}
        <div className="mb-6 flex flex-col justify-between gap-4 border-b border-[#c7c4d8]/20 pb-4 md:flex-row md:items-end">

          <div>
            <h1 className="text-2xl font-semibold text-[#0b1c30]">
              Search Results
            </h1>

            <p className="mt-1 text-sm text-[#464555]">
              Showing {data.length} change results for{" "}
              <span className="font-medium text-[#3525cd]">
                 {input}
              </span>
            </p>
          </div>

         </div>

        {/* Content */}
        <div className="flex flex-col gap-6 lg:flex-row">

          {/* Filter Sidebar */}
        

          {/* Results */}
          <div className="flex-1">

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

              {/* Card 1 */}
             { data.length === 0 ? <NoResult search_input={subject} />:(
                data.map((item,indx)=>(
                    <NoteCard key={indx}
                     note={item}
                    />
                ))
            )
             }
              

            </div>

          </div>

        </div>

      </main>
    </div>
        
    </div>
)
}

function NoteCard({ note }: { note: data }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#dfe2ed] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3525cd]/30 hover:shadow-xl">

      {/* PDF Preview */}
      <div className="relative h-44 overflow-hidden bg-[#eff4ff]">
            <iframe
          src={note.fileurl}
          title={note.title}
          className="h-44 w-full"
        />

       
        {/* Stream */}
        <div className="absolute left-3 top-3 rounded-lg bg-[#3525cd] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
          {note.forstream}
        </div>

      </div>

      {/* Content */}
      <div className="p-5">

        {/* Title */}
        <h3 className="line-clamp-1 text-lg font-bold text-[#0b1c30] transition-colors group-hover:text-[#3525cd]">
          {note.title}
        </h3>

        {/* Subject */}
        <div className="mt-3">
          <span className="inline-flex items-center rounded-lg bg-[#eff4ff] px-3 py-1.5 text-sm font-semibold text-[#3525cd]">
            {note.subject}
          </span>
        </div>

        {/* Semester */}
        <div className="mt-4 flex items-center justify-between">

          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-[#73748a]">
              Semester
            </p>

            <p className="mt-1 text-sm font-semibold text-[#0b1c30]">
              {note.forsem}
            </p>
          </div>

          <div>
            <p className="text-right text-[10px] font-medium uppercase tracking-wider text-[#73748a]">
              Stream
            </p>

            <p className="mt-1 text-right text-sm font-semibold text-[#0b1c30]">
              {note.forstream}
            </p>
          </div>

        </div>

        {/* Uploader */}
        <div className="mt-5 flex items-center gap-3 border-t border-[#dfe2ed] pt-4">

          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#eff4ff]">

            {note.uploader.avatarUrl ? (
              <img
                src={note.uploader.avatarUrl}
                alt={note.uploader.username}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-sm font-bold text-[#3525cd]">
                {note.uploader.username.charAt(0).toUpperCase()}
              </span>
            )}

          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#0b1c30]">
              {note.uploader.username}
            </p>

            <p className="text-[10px] uppercase tracking-wide text-[#73748a]">
              Level {note.uploader.level}
            </p>
          </div>

        </div>

        {/* Date + Preview */}
        <div className="mt-4 flex items-center justify-between">

          <span className="text-[10px] font-medium uppercase tracking-wide text-[#73748a]">
            {new Date(note.createdAt).toLocaleDateString()}
          </span>

          <a
            href={note.fileurl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#3525cd] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#2d20b5] active:scale-95"
          >
            Open Preview
          </a>

        </div>

      </div>
    </div>
  );
}