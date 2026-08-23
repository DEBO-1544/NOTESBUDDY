"use client";



import { useUser } from "@clerk/nextjs";

export default function HomeHeader() {
  const { user } = useUser();

  return (
    <section className="border-b border-slate-200 min-h-screen bg-white">
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
    </section>
  );
}