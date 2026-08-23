"use client";
import Navbar from "./navbar.dashboard"
import NoteGrid from "./notegrid"
import { useUser } from "@clerk/nextjs";
import {Compass,PlusCircle,User} from "lucide-react"
import Link from "next/link"
export default function Dashboard() {
    const { user } = useUser();
  return (
      <div className="min-h-screen bg-[#f8f9ff]">
      {/* Desktop Navbar */}
      <Navbar />

      {/* Welcome Section */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Welcome back,
          <span className="text-indigo-600">
            {" "}
            {user?.firstName ?? "Student"} 👋
          </span>
        </h1>

        <p className="mt-2 max-w-2xl text-slate-600">
          Here are the latest notes recommended for your stream, semester, and
          interests.
        </p>
      </div>

      <NoteGrid />

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-around border-t border-slate-200 bg-white/95 shadow-lg backdrop-blur md:hidden">
        <Link
          href="/dashboard"
          className="flex flex-col items-center gap-1 text-indigo-600"
        >
          <Compass size={22} />
          <span className="text-[10px] font-semibold">Explore</span>
        </Link>

        <Link
          href="/uploadnotes"
          className="flex flex-col items-center gap-1 text-slate-500 transition hover:text-indigo-600"
        >
          <PlusCircle size={22} />
          <span className="text-[10px] font-semibold">Upload</span>
        </Link>

        <Link
          href="/profile"
          className="flex flex-col items-center gap-1 text-slate-500 transition hover:text-indigo-600"
        >
          <User size={22} />
          <span className="text-[10px] font-semibold">Profile</span>
        </Link>
      </nav>

      {/* Prevent NoteGrid from being hidden behind mobile navbar */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
