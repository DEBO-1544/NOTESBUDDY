"use client";

import { Loader2, BookOpen } from "lucide-react";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6">
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-indigo-600">
            NotesBuddy
          </h1>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-indigo-100 bg-white/70 p-8 shadow-xl backdrop-blur-xl">
          {/* Animated Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative h-24 w-24">
              <div className="absolute inset-0 animate-ping rounded-full bg-indigo-200 opacity-30" />

              <div className="absolute inset-4 rounded-full bg-indigo-100" />

              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 shadow-lg">
                  <BookOpen size={28} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              Preparing your workspace...
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              We re setting up your personalized NotesBuddy experience.
            </p>
          </div>

          {/* Spinner */}
          <div className="mt-8 flex justify-center">
            <Loader2
              size={36}
              className="animate-spin text-indigo-600"
            />
          </div>

          {/* Loading Dots */}
          <div className="mt-6 flex justify-center gap-2">
            <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-indigo-500 [animation-delay:-0.3s]" />
            <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-indigo-500 [animation-delay:-0.15s]" />
            <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-indigo-500" />
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-500">
          This will only take a few seconds...
        </p>
      </div>
    </main>
  );
}