// app/landing/Stats.tsx

import {
    Upload,
    MessageSquareText,
    Sparkles,
  } from "lucide-react";
  
  export default function Stats() {
    return (
      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
              <Upload className="h-7 w-7 text-indigo-600" />
            </div>
  
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              Instant Sharing
            </h3>
  
            <p className="text-slate-600 leading-7">
              Upload your notes in seconds. We support PDF documents with
              lightning-fast uploads and secure cloud storage.
            </p>
          </div>
  
          {/* Card 2 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
              <MessageSquareText className="h-7 w-7 text-violet-600" />
            </div>
  
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              Collaborative Doubts
            </h3>
  
            <p className="text-slate-600 leading-7">
              Ask questions directly on study materials and receive answers from
              classmates and top contributors.
            </p>
          </div>
  
          {/* Card 3 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
              <Sparkles className="h-7 w-7 text-cyan-600" />
            </div>
  
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              AI Assistance
            </h3>
  
            <p className="text-slate-600 leading-7">
              Generate AI summaries, flashcards, quizzes, and key concepts from
              your notes with a single click.
            </p>
          </div>
        </div>
      </section>
    );
  }