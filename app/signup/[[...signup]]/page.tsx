
import { Metadata } from 'next'
import { SignUp } from "@clerk/nextjs"
export const metadata: Metadata = {
  title: "SIGN-UP ",
  description: "SIGN UP PAGE"
}

const page = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-zinc-950">
      <div className="w-full max-w-md">
        <SignUp />
      </div>
    </main>
  )
}

export default page