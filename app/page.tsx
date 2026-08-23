import {UserAvatar,Show, UserButton} from "@clerk/nextjs"
import Features from "../component/features"
import Footer from "@/component/footer";
import Hero from"@/component/hero"
import Navbar from "@/component/navbar"
import Stats from "@/component/stats"
export default function Home() {
  return (
      <div className="min-h-screen ">   
      <Navbar />
        <Hero />
        <Stats />
        <Features />
        <Footer />
        </div>
  );
}
