"use client"
import {
  Home,
  Upload,
  Trophy,
  Bookmark,
} from "lucide-react";
import Link from "next/link";

import { Bell, Moon, Search,User } from "lucide-react";
import { UserButton ,Show} from "@clerk/nextjs";


const NAV_LINKS = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Upload",
    href: "/uploadnotes",
    icon: Upload,
  },
  {
    title:"Profile",
    href:"/profile",
    icon:User
  }
 
];





export default function Navbar(){
  
    return (
       <div>
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

        <div className="hidden lg:block w-full max-w-lg">

          <div className="relative">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />

            <input
              placeholder="Search Notes..."
              className="w-full rounded-full bg-slate-100 py-2 pl-11 pr-4 outline-none focus:ring-2 focus:ring-indigo-500"
            />

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
          
       </div>
    )
  
}
