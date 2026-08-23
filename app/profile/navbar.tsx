"use client"
import { UserButton } from "@clerk/nextjs"
import { User, Upload, Compass, Bell, Sun } from "lucide-react"
import Link from "next/link"

const NavLink = [
  {
    title: "Explore",
    href: "/dashboard",
    icon: Compass
  },
  {
    title: "Upload",
    href: "/uploadnotes",
    icon: Upload
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User
  }
]
const Navbar = () => {


  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#dfe2ed]/70 bg-white/80 shadow-sm backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6 py-2">

      <div className="flex items-center gap-6">

        <span className="text-xl font-bold text-[#3525cd]">
          NotesBuddy
        </span>

        <nav className="ml-8 hidden items-center gap-6 md:flex">

          {
            NavLink.map((item,id)=>(
              <Link
              key={id}
              href={item.href}
               className="flex flex-col items-center justify-center gap-1 rounded-xl px-4 py-2 text-slate-500 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
              >
                <item.icon
                 size={20}

                />
                 <span className="text-[11px] font-semibold">
        {item.title}
      </span>
              </Link>

            ))
}
        </nav>
      </div>

      <div className="flex items-center gap-4">

       

       <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-[#3525cd]/30">
  <UserButton />
</div>


      </div>
    </div>
  </header>
   
  )
}
export default Navbar