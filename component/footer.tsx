// app/landing/Footer.tsx

import Link from "next/link";
//import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600">
              NotesBuddy
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Study smarter, share better. The all-in-one platform
              for students to upload notes, collaborate, and learn
              together.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Product
            </h3>

            <div className="space-y-3">
              <Link href="/" className="block text-slate-600 hover:text-indigo-600">
                Home
              </Link>

              <Link href="/explore" className="block text-slate-600 hover:text-indigo-600">
                Explore
              </Link>

              <Link href="/sign-up" className="block text-slate-600 hover:text-indigo-600">
                Sign Up
              </Link>

              <Link href="/sign-in" className="block text-slate-600 hover:text-indigo-600">
                Sign In
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Resources
            </h3>

            <div className="space-y-3">
              <Link href="#" className="block text-slate-600 hover:text-indigo-600">
                Help Center
              </Link>

              <Link href="#" className="block text-slate-600 hover:text-indigo-600">
                Privacy Policy
              </Link>

              <Link href="#" className="block text-slate-600 hover:text-indigo-600">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Connect
            </h3>

            <div className="flex gap-4">
              
               
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} NotesBuddy. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with ❤️ for students By Debojit .
          </p>
        </div>
      </div>
    </footer>
  );
}