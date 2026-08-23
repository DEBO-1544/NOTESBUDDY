"use client"
import Link from "next/link";
const Landnavbar=()=>{
     return (
        <>
        <nav className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
    <h1 className="text-2xl font-bold text-indigo-600">
      NotesBuddy
    </h1>

    <div className="flex items-center gap-3">
        <Link  href="/signin">
      <button className=" cursor-pointer  active:scale-90 rounded-xl border border-indigo-200 px-5 py-2 font-medium text-indigo-600 transition hover:bg-indigo-50">
        Login
      </button>
      </Link>
       <Link href="/signup">
      <button className=" cursor-pointer  scale-90   rounded-xl bg-indigo-600 px-5 py-2 font-medium text-white shadow-lg transition hover:bg-indigo-700">
        Get Started
      </button>
      </Link>
    </div>
  </div>
</nav>
        </>
     )
}

export default Landnavbar;