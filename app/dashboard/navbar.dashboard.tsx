"use client"
import {
  Home,
  Upload,
  Trophy,
  Bookmark,
} from "lucide-react";
import Link from "next/link";
import { Bell, Moon, Search ,Compass} from "lucide-react";
import { UserButton ,Show} from "@clerk/nextjs";
import {User} from "lucide-react"
import {useState} from "react"

const NAV_LINKS = [
  {
    title: "Explore",
    href: "/dashboard",
    icon: Compass,
  },
  {
    title: "Upload",
    href: "/uploadnotes",
    icon: Upload,
  },{
    title:"Profile",
    href:"/profile",
    icon:User
  }
 
];



export default function Navbar() {
  const [input,setinput]=useState("")
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Left */}

        <div className="flex items-center gap-10">

          <Link href="/">
            <h1 className="text-2xl font-bold text-indigo-600">
              NotesBuddy
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-7">

            {NAV_LINKS.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-600 transition hover:text-indigo-600"
                >
                  <Icon size={18} />

                  {item.title}
                </Link>
              );
            })}
          </nav>

        </div>

        {/* Search */}

       <div className="hidden w-full max-w-lg lg:block">
  <div className="relative flex items-center">

    <Search
      className="absolute left-4 text-slate-400"
      size={18}
    />

    <input
      placeholder="Search Notes..."
      onChange={(e)=>(setinput(e.target.value))}
      className="w-full  text-black rounded-full bg-slate-100 py-2 pl-11 pr-24 outline-none focus:ring-2 focus:ring-indigo-500"
    />
  
    <Link
      href={`/serach?subject=${input}`}
      className="  cursor-pointer absolute right-1 rounded-full bg-indigo-600 px-5 py-1.5 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
    >
      Search
    </Link>

  </div>
</div>
        {/* Right */}

        <div className="flex items-center gap-3">

            <Show when="signed-in">
                <UserButton   />
            </Show>
        

        </div>

      </div>
    </header>
  );
}