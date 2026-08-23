const hero=()=>{
    return (
        // app/landing/Hero.tsx


    <section className="relative overflow-hidden px-6 py-24 lg:px-20 lg:py-32">
      {/* Background Blur */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="mb-6 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
            🚀 India's Student Notes Platform
          </span>

          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Study{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Smarter.
            </span>
            <br />
            Share{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Better.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Upload notes, discover quality study materials from your classmates,
            ask doubts, and level up your learning journey with NotesBuddy.
          </p>

          

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-10 lg:justify-start">
            <div>
              <h3 className="text-3xl font-bold text-indigo-600">10K+</h3>
              <p className="text-sm text-slate-500">Study Notes</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-indigo-600">5K+</h3>
              <p className="text-sm text-slate-500">Students</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-indigo-600">100+</h3>
              <p className="text-sm text-slate-500">Colleges</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex-1">
          <img
            src="/hero.png"
            alt="Students studying together"
            className="w-full rounded-3xl shadow-2xl"
          />

          {/* Floating Card 1 */}
          <div className="absolute -right-6 top-8 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-xl backdrop-blur">
            <p className="font-semibold">📄 Calculus Notes</p>
            <span className="text-sm text-slate-500">
              Shared by Alex
            </span>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute -left-6 bottom-8 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-xl backdrop-blur">
            <p className="font-semibold">🤖 AI Summary</p>
            <span className="text-sm text-slate-500">
              Ready in seconds
            </span>
          </div>
        </div>
      </div>
    </section>
 

    )

}

export default hero 