import {UserAvatar,Show, UserButton} from "@clerk/nextjs"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100">

  {/* Navbar */}
  <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
    <h1 className="text-2xl font-bold">Notes Buddy</h1>

    <Show when="signed-in">
      <UserButton />
    </Show>
  </nav>

  {/* Hero Section */}
  <main className="flex flex-col items-center justify-center px-6 text-center min-h-[80vh]">

    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
      Notes Buddy
    </h1>

    <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
      Your one-stop destination for all your notes needs.
      Upload, discover, bookmark and share notes with students.
    </p>

    <div className="mt-10 flex gap-4">
      <button className="rounded-lg bg-black px-6 py-3 text-white hover:opacity-90 dark:bg-white dark:text-black">
        Explore Notes
      </button>

      <button className="rounded-lg border border-zinc-300 px-6 py-3 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900">
        Upload Notes
      </button>
    </div>

  </main>

</div>
  );
}
