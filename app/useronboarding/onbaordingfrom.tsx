"use client";

import { useState } from "react";
import {
  Building2,
  GraduationCap,
  BookOpen,
  School,
  ArrowRight,
} from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const years = ["First", "Second", "Third", "Fourth"];
const  instituename =["MSIT"]
const streams = [
  "CSE",
  "CSBS",
  "IT",
  "ECE",
  "EE",
  "ME",
  "CE",
];

const semesters = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth",
];

export default function Onboarding() {
  const router = useRouter();
  const { user } = useUser();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    institutename: "",
    presentyear: "",
    stream: "",
    semester: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/onboarding`,
        {
          clerkid:user?.id,
          ...formData,
        }
      );

      router.replace("/dashboard");
    } catch (err) {
        setLoading(false)
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-xl">

        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600">
            NotesBuddy
          </h1>

          <p className="mt-3 text-slate-500">
            Complete your academic profile to continue.
          </p>
        </div>

        {/* Card */}

        <div className="rounded-3xl border border-indigo-100 bg-white/70 p-8 shadow-xl backdrop-blur-xl space-y-6">

          {/* Institute */}

          <div>
            <label className="mb-2 text-black flex items-center gap-2 font-semibold">
              <Building2 size={18} />
              Institute Name
            </label>

           <select
           
           name="institutename"
           value={formData.institutename}
           onChange={handleChange}
           className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-black"
           >
            <option className="  text-black text-semibold " value="">Select Institute</option>
             {instituename.map((name,index)=>(
               <option key={index}>{name}</option>
             ))}
           </select>
          </div>

          {/* Year */}

          <div>
            <label className="mb-2  text-black  flex items-center gap-2 font-semibold">
              <GraduationCap size={18} />
              Current Year
            </label>

            <select
              name="presentyear"
              value={formData.presentyear}
              onChange={handleChange}
              className="w-full rounded-xl border text-black border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            >
              <option className="text-black font-semibold " value="">Select Year</option>

              {years.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Stream */}

          <div>
            <label className="mb-2  text-black  flex items-center gap-2 font-semibold">
              <School size={18} />
              Stream
            </label>

            <select
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              className=" text-black w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            >
              <option className="text-black font-semibold " value="">Select Stream</option>

              {streams.map((stream) => (
                <option key={stream}>{stream}</option>
              ))}
            </select>
          </div>

          {/* Semester */}

          <div>
            <label className="mb-2 flex items-center gap-2 font-semibold text-black">
              <BookOpen size={18} />
              Semester
            </label>

            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="text-black w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            >
              <option className="text-black font-semibold " value="">Select Semester</option>

              {semesters.map((semester) => (
                <option key={semester}>{semester}</option>
              ))}
            </select>
          </div>

          {/* Button */}

          <button
            disabled={
              loading ||
              !formData.institutename ||
              !formData.presentyear ||
              !formData.stream ||
              !formData.semester
            }
            onClick={handleSubmit}
            className=" cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              "Setting up..."
            ) : (
              <>
                Complete Onboarding
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}