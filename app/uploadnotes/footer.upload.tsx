import {Sparkles, FileText,BadgeCheck} from "lucide-react"
export default function Footer(){

    

    return(
        <div className="flex justify-center mt-[-20px] ">
         <div className="grid gap-[12px] grid-cols-1 md:grid-cols-3 max-w-[1000px] justify-center mx-auto">
          <div className="p-[24px] bg-white/50 border border-[#c7c4d8]/10 rounded-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <span className="material-symbols-outlined text-[#3525cd] mb-[8px]">
              <Sparkles />
            </span>
            <h4 className="text-[14px] leading-[1.5] font-bold text-[#0b1c30]">
              Scan Clearly
            </h4>
            <p className="text-[14px] leading-[1.5] text-[#464555] mt-2">
              Ensure notes are legible and oriented correctly for better rankings.
            </p>
          </div>
          <div className="p-[24px] bg-white/50 border border-[#c7c4d8]/10 rounded-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <span className="material-symbols-outlined text-[#3525cd] mb-[8px]">
              <FileText />
            </span>
            <h4 className="text-[14px] leading-[1.5] font-bold text-[#0b1c30]">
              Detailed Info
            </h4>
            <p className="text-[14px] leading-[1.5] text-[#464555] mt-2">
              Accurate titles and descriptions help peers find your resources faster.
            </p>
          </div>
          <div className="p-[24px] bg-white/50 border border-[#c7c4d8]/10 rounded-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <span className="material-symbols-outlined text-[#3525cd] mb-[8px]">
              <BadgeCheck />
            </span>
            <h4 className="text-[14px] leading-[1.5] font-bold text-[#0b1c30]">
              Earn Rewards
            </h4>
            <p className="text-[14px] leading-[1.5] text-[#464555] mt-2">
              High-rated notes earn you exclusive premium badges and perks.
            </p>
          </div>
        </div>
      </div>
        
      
    )
}