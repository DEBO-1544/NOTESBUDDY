import { Metadata} from "next"
import {SignIn} from "@clerk/nextjs"
export const metadata: Metadata = {
  title: "SIGN-IN",
  description: "Sign in to your account"
}

const Mainpage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-zinc-950">
      <div className="w-full max-w-md">
        <SignIn
        appearance={{
    elements: {
      card: "shadow-xl border",
      headerTitle: "text-2xl font-bold",
      formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
    },
  }} />
      </div>
    </main>
  );
  
}

export default Mainpage