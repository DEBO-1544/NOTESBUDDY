import Link from "next/link"
const Footer=()=>{
 return (
    <footer className="mt-20 hidden w-full border-t border-[#dfe2ed] bg-white py-12 md:block">

  <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-12">

    {/* Footer Links */}
    <div className="flex items-center gap-12">

      <Link
        href="/dashboard"
        className="text-sm text-[#464555] transition-colors hover:text-[#3525cd]"
      >
        Explore
      </Link>

      <Link
        href="/uploadnotes"
        className="text-sm text-[#464555] transition-colors hover:text-[#3525cd]"
      >
        Upload
      </Link>

      <Link
        href="/profile"
        className="text-sm font-bold text-[#3525cd]"
      >
        Profile
      </Link>

      <Link
        href="/privacy"
        className="text-sm text-[#464555] transition-colors hover:text-[#3525cd]"
      >
        Privacy
      </Link>

      <Link
        href="/terms"
        className="text-sm text-[#464555] transition-colors hover:text-[#3525cd]"
      >
        Terms
      </Link>

    </div>

    {/* Footer Branding */}
    <div className="flex flex-col items-center gap-2">

      <span className="text-xl font-bold text-[#3525cd]">
        NotesBuddy
      </span>

      <p className="text-sm text-[#73748a]">
        © 2026 NotesBuddy
      </p>

    </div>

  </div>

</footer>
 )
}
export default Footer