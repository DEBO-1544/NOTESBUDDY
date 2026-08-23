import Link from "next/link";
import {FileText} from "lucide-react"
export default function NoNotes () {
  return (
    <div className="col-span-full flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#dfe2ed] bg-white px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eff4ff]">
        <FileText
          size={30}
          strokeWidth={1.5}
          className="text-[#3525cd]"
        />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-[#0b1c30]">
        You don t have any notes yet
      </h3>

      <p className="mt-2 max-w-md text-sm text-[#73748a]">
        Upload your first note and start building your collection.
      </p>

      <Link
        href="/uploadnotes"
        className="mt-5 rounded-xl bg-[#3525cd] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#2d20b5] active:scale-95"
      >
        Upload Notes
      </Link>
    </div>
  );
};