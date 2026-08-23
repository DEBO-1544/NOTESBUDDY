// app/landing/Features.tsx

import Image from "next/image";
import { CheckCircle, ShieldCheck } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
        {/* Left Side */}
        <div className="relative flex-1">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500 to-violet-500 opacity-20 blur-2xl"></div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
            <Image
              src="/dashboard.png"
              alt="NotesBuddy Dashboard"
              width={700}
              height={450}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
            <ShieldCheck className="h-4 w-4" />
            Trusted by Students
          </div>

          <h2 className="text-4xl font-bold text-slate-900">
            Curated by students,
            <br />
            for students.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            NotesBuddy brings together quality notes from your classmates,
            making it easy to discover, learn, and collaborate. Every upload
            helps another student succeed.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 text-indigo-600" />

              <div>
                <h3 className="font-semibold text-slate-900">
                  High Quality Notes
                </h3>

                <p className="text-slate-600">
                  Uploads are ranked so the best notes always appear first.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 text-indigo-600" />

              <div>
                <h3 className="font-semibold text-slate-900">
                  Powerful Search
                </h3>

                <p className="text-slate-600">
                  Search by subject, semester, stream, or title to instantly
                  find what you need.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-6 w-6 text-indigo-600" />

              <div>
                <h3 className="font-semibold text-slate-900">
                  AI Learning Tools
                </h3>

                <p className="text-slate-600">
                  Generate summaries, quizzes, flashcards, and explanations from
                  any uploaded note.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}