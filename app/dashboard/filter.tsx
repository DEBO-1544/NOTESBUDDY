"use client";

import { Search, SlidersHorizontal } from "lucide-react";
//import { FILTERS } from "@/constants/filters";
import { useState } from "react";
export const FILTERS = [
  "All",
  "Engineering",
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Electronics",
  "Mechanical",
] as const;

export default function SearchSection() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <section className="mx-auto mt-8 max-w-7xl px-6">
      {/* Heading */}

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Explore Notes
        </h2>

        <p className="mt-2 text-slate-500">
          Discover high-quality notes shared by students.
        </p>
      </div>

      {/* Search */}

      <div className="flex flex-col gap-4 md:flex-row">

        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search notes, subjects, universities..."
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 transition hover:bg-slate-50">
          <SlidersHorizontal size={18} />

          Filters
        </button>

      </div>

      {/* Categories */}

      <div className="mt-6 flex flex-wrap gap-3">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              selectedFilter === filter
                ? "bg-indigo-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-500 hover:text-indigo-600"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}