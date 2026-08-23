"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Download,
  Eye,
  Bookmark,
  Clock,
} from "lucide-react";

interface NoteCardProps {
  
  title: string;
  subject: string;
  forsem: string;
  uploader:{
     username:string
  };
  
  
  uploadedAt: Date;
  link: string;
}

export default function NoteCard({
  
  title,
  subject,
  forsem,
  uploader,
uploadedAt,
link,
}: NoteCardProps) {

  const HandleDownload = async () => {
  try {
    const response = await fetch(link);

    if (!response.ok) {
      throw new Error("Failed to download PDF");
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${title}.pdf`;

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed:", error);
  }
};
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

  {/* PDF Preview */}
  <div className="relative h-48 w-full overflow-hidden bg-slate-100">

    <iframe
      src={link || undefined}
      title={title}
      className="h-full w-full border-0"
    />

    {/* Semester Badge */}
    <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
      {forsem}
    </span>

  </div>

      {/* Content */}

      <div className="space-y-4 p-5">

        <div>

          <p className="text-sm font-medium text-indigo-600">
            {subject}
          </p>

          <h3 className="mt-1 line-clamp-2 text-lg font-bold text-slate-900">
            {title}
          </h3>

        </div>

        {/* Uploader */}

        <div className="flex items-center justify-between text-sm text-slate-500">

          <span>
            By {uploader.username}
          </span>

          <span className="flex items-center gap-1">

            <Clock size={14} />

            {new Date(uploadedAt).toLocaleDateString('en-IN',{
              day:'numeric',
              month:'short',
              year:'numeric'
            })}

          </span>

        </div>

        {/* Stats */}

        <div className="flex items-center justify-between border-y border-slate-100 py-3">

          <div className="flex items-center gap-1 text-amber-500">

            <Star size={16} fill="currentColor" />

           {/* <span className="text-sm font-semibold text-slate-700">
              {rating}
            </span>*/}

          </div>

          <div className="flex items-center gap-1 text-slate-500">

            <Eye size={16} />

           {/* <span>{views}</span>*/}

          </div>
          <button onClick={HandleDownload} className="cursor-pointer">
          <div className=" hover:text-violet-600 flex items-center gap-1 text-slate-500">

            <Download size={16} />

           {/* <span>{downloads}</span>*/}

          </div>
          </button>
        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl bg-indigo-600 py-3 text-center font-semibold text-white transition hover:bg-indigo-700"
          >
            View Notes
          </a>

          <button className="rounded-xl border border-slate-200 px-4 transition hover:bg-slate-100">

            <Bookmark size={20} />

          </button>

        </div>

      </div>

    </div>
  );
}