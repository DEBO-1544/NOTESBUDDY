"use client";

import Link from "next/link";
import axios from "axios"
import Footer from "./footer"
import { useEffect,useState } from "react";
import { useUser} from "@clerk/nextjs";
import {UserRound} from "lucide-react"
import Image from "next/image"
import Navbar from "./navbar";
import Nonotes from "./nonotes"
import {
  
  PlusCircle,
  Settings,
  
  Upload,
 
  Compass,
  Trophy,
  User,
} from "lucide-react";




const NOTES = [
  {
    id: "1",
    code: "CS201",
    title: "Advanced Algorithms & Complexity",
    description:
      "Full semester summary including P vs NP proofs and complexity class analysis...",
    downloads: 245,
    likes: 12,
    uploadedAt: "2 days ago",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBB5vl6HCTNg4FbTJ9N0HVUGHijnjCbwqakF06J7scdXivoX9A1lgGK5UZPwpW5dtpjeKjVAaQ9HJXqnWJMOT3h1aiEEurNnxb65uzjRwEHc0u-NOR-KIoISG7w88qbzz7VJNnXEjMDXh3KpmdH1mbiMpc6i0RujGF5hZQAhIdujwaVYLDq2O7g5WVbeqSTsobwIX14EkjYCBzEi6-EYSMxzSVkDmQB1ebRRn42Je4eC8MoTeUcbVyERfTdvSYRvD66ZiUR6gq-nPk",
  },
  {
    id: "2",
    code: "PHY104",
    title: "Introduction to Quantum Logic",
    description:
      "Concise formulas and derivations for wave mechanics and Schrödinger equation...",
    downloads: 89,
    likes: 5,
    uploadedAt: "1 week ago",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBk6k3lA2A8RwFtuZLTqN7eqSYNhAqnWrNZ567yhzXlrR2jYvVqUkNznH5J4h8S-bZj8hE4lGHsLzmxgYp8MTRK6t34XrbMZQByBSQDorBRE-FtfSePFWDudvMtGhZcFKuk6kbC2llYLZyYcqUR_4yV_agS99xl5gukW28PR069bcJB2d-PEkAp8NzNLHbm9973Nd8zUzbqh6RYRFdWkRO_cmmpDk1ZSfdLgeuvIkTZkmwqna18e-46Khd-cqP-eO29eHlONtq18ro",
  },
];

const NavLink=[
  {
    title:"Explore",
    href:"/dashboard",
    icon:Compass
  },
  {
    title:"Upload",
    href:"/uploadnotes",
    icon:Upload
  },
  {
    title:"Profile",
    href:"/profile",
    icon:User
  }
]
interface Note {
  id: string;
  title: string;
  subject: string;
  forsem: string;
  forstream: string;
  fileurl: string;
  createdAt: string;
  updatedAt: string;
}

interface UserInfo {
  username: string;
  stream: string;
  institutename: string;
  presentyear: string;
  semester: string;
  Stage: string;
  level: number;
  createdAt: string;
  Notes?: Note[];
}

interface AllNotes {
  info: UserInfo;
}

export default function Profile() {
    const {user,isLoaded}=useUser()
    const [allnotes,setAllNotes]=useState<AllNotes | null>(null)
    const [Error,Seterror]=useState("")

    useEffect(()=>{
        if(!user && !isLoaded){
            return
        }

        const Notes_Fetch=async()=>{

            try{
            const res= await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/profile?clerkid=${user?.id}`)

            console.log(res.data.data)
            setAllNotes(res.data.data)


        }catch(err){
            console.log(err)
           
              if (axios.isAxiosError(err)) {
    Seterror(
      err.response?.data?.message ||
      err.message ||
      "Something went wrong"
    );
  } else {
    Seterror("Something went wrong");
  }
}
        }
    
        Notes_Fetch()
        
    },[isLoaded])
    
  return (

    <div className=" bg-[#f8f9ff]">

      <h1 className="text-red-500 font-semibold">
        {
          Error
        }
      </h1>

      <Navbar/>
   
  <section className="mt-12">
  <div className="flex flex-col items-center gap-8 rounded-2xl border border-[#dfe2ed] bg-white p-6 shadow-sm md:flex-row">

    {/* Avatar */}
    <div className="relative shrink-0">
      <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-[#eff4ff] bg-[#eff4ff] shadow-xl md:h-40 md:w-40">
        {user?.imageUrl ? (
          <img
            src={user.imageUrl}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        ) : (
          <UserRound
            size={64}
            strokeWidth={1.5}
            className="text-[#3525cd]"
          />
        )}
      </div>
    </div>

    {/* User Information */}
    <div className="flex-1 text-center md:text-left">

      <h1 className="text-3xl font-bold text-[#0b1c30]">
        {
         allnotes?.info?.username}
      </h1>

      <p className="mt-1 text-sm text-[#73748a]">
      
      </p>

      {/* User Details */}
      <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">

        {allnotes?.info?.stream && (
          <span className="rounded-lg bg-[#eff4ff] px-3 py-1.5 text-xs font-semibold text-[#3525cd]">
            {allnotes.info.stream}
          </span>
        )}

        {allnotes?.info?.semester && (
          <span className="rounded-lg bg-[#f3edff] px-3 py-1.5 text-xs font-semibold text-[#712ae2]">
            {allnotes.info.semester} Semester
          </span>
        )}

        {allnotes?.info?.presentyear && (
          <span className="rounded-lg bg-[#eef7ff] px-3 py-1.5 text-xs font-semibold text-[#2878c8]">
            {allnotes.info.presentyear} Year
          </span>
        )}

        {allnotes?.info?.institutename && (
          <span className="rounded-lg bg-[#f5f5f5] px-3 py-1.5 text-xs font-semibold text-[#464555]">
            {allnotes.info.institutename}
          </span>
        )}

        {allnotes?.info?.Stage && (
          <span className="rounded-lg bg-[#fff4e8] px-3 py-1.5 text-xs font-semibold text-[#d97706]">
            {allnotes.info.Stage}
          </span>
        
        )}

      </div>

      {/* XP */}
      <div className="mt-6 w-full max-w-md">

       
      </div>

    </div>

    {/* Actions */}
    <div className="flex w-full flex-col gap-3 md:w-auto">

      <Link
        href="/uploadnotes"
        className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#3525cd] px-8 py-3 font-bold text-white shadow-lg shadow-[#3525cd]/20 transition-all hover:bg-[#2d20b5] active:scale-95"
      >
        <PlusCircle size={20} />
        Upload Notes
      </Link>

      <button
        type="button"
        className=" hidden flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#dfe2ed] bg-[#f1f3fa] px-8 py-3 font-semibold text-[#0b1c30] transition-all hover:bg-[#e8ebf5] active:scale-95"
      >
        <Settings size={20} />
        Edit Profile
      </button>

    </div>

  </div>
</section>
<section className="mt-12">

  <h2 className="mb-6 text-xl font-semibold text-[#0b1c30]">
    Uploaded Notes
  </h2>

  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

    {/* Notes */}
   {  allnotes?.info?.Notes && allnotes?.info?.Notes?.length>0?(  allnotes?.info?.Notes?.map((note) => (
  <div
    key={note.id}
    className="group overflow-hidden rounded-2xl border border-[#dfe2ed] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3525cd]/40 hover:shadow-xl"
  >
    {/* Thumbnail */}
    <div className="relative h-44 overflow-hidden bg-[#eff4ff]">
      <iframe
        src={note.fileurl}
        title={note.title}
        className="h-full w-full border-0 transition-transform duration-500 group-hover:scale-105"
      />

      {/* Subject / Code */}
      <div className="absolute left-3 top-3 rounded-lg bg-[#3525cd] px-3 py-1 font-mono text-[10px] text-white shadow-sm">
        {note.forstream}
      </div>
    </div>

    {/* Content */}
   <div className="p-5">
  <div className="flex items-start justify-between gap-3">
    <h3 className="text-lg font-bold text-[#0b1c30] transition-colors group-hover:text-[#3525cd]">
      {note.subject}
    </h3>

    <span className="shrink-0 rounded-full bg-[#eff4ff] px-3 py-1 text-[11px] font-semibold text-[#3525cd]">
      {note.forsem} Sem
    </span>
  </div>

  <p className="mt-2 text-sm font-medium text-[#73748a]">
    {note.title}
  </p>

  <div className="mt-5 flex items-center justify-between border-t border-[#dfe2ed] pt-4">
  <span className="rounded-md bg-[#f3edff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#712ae2]">
    {note.forstream}
  </span>

  <span className="font-mono text-[10px] text-[#73748a]">
    {new Date(note.createdAt).toLocaleDateString()}
  </span>
</div>

<a
  href={note.fileurl}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#3525cd] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#2d20b5] active:scale-95"
>
  Open Preview
</a>
</div>
  </div>
))
  ):<Nonotes/>
}
    {/* Upload New Resource */}
    <Link
      href="/uploadnotes"
      className="group flex min-h-[300px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#dfe2ed] bg-white p-8 transition-all hover:border-[#3525cd]/50 hover:bg-[#eff4ff]"
    >

      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#eff4ff] text-[#464555] transition-colors group-hover:bg-[#3525cd]/10 group-hover:text-[#3525cd]">
        <Upload size={32} />
      </div>

      <span className="font-semibold text-[#0b1c30] transition-colors group-hover:text-[#3525cd]">
        Upload New Resource
      </span>

      <span className="mt-1 text-center text-sm text-[#73748a]">
        Upload your PDF notes
      </span>

    </Link>

  </div>

</section>


{/* Mobile Navigation */}
<nav className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-around rounded-t-2xl border-t border-[#dfe2ed] bg-white/95 px-4 shadow-lg backdrop-blur-lg md:hidden">

  <Link
    href="/dashboard"
    className="flex flex-col items-center justify-center gap-1 text-[#464555] transition-all hover:text-[#3525cd]"
  >
    <Compass size={20} />

    <span className="text-[10px] font-semibold uppercase">
      Explore
    </span>
  </Link>

  <Link
    href="/uploadnotes"
    className="flex flex-col items-center justify-center gap-1 text-[#464555] transition-all hover:text-[#3525cd]"
  >
    <PlusCircle size={20} />

    <span className="text-[10px] font-semibold uppercase">
      Upload
    </span>
  </Link>

  <Link
    href="/profile"
    className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[#3525cd]/10 px-4 py-1 text-[#3525cd]"
  >
    <User size={20} />

    <span className="text-[10px] font-semibold uppercase">
      Profile
    </span>
  </Link>

</nav>


{/* Footer */}
<Footer/>
</div>



  );
}