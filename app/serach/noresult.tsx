"use client"
import {FileSearch} from "lucide-react"
export default function NoResult({
   search_input,
}: {
   search_input: string | null;
}){

    return( <>
     <div className="flex min-h-[400px] w-full flex-col items-center justify-center rounded-2xl border border-[#dfe2ed] bg-white px-6 text-center shadow-sm">
      
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eff4ff]">
        <FileSearch
          size={32}
          className="text-[#3525cd]"
        />
      </div>

      <h2 className="text-xl font-bold text-[#0b1c30]">
        No notes found With Subject {search_input}
      </h2>

      <p className="mt-2 max-w-md text-sm text-[#73748a]">
        We couldn&apos;t find any notes matching your search. Try searching with a
        different subject or keyword.
      </p>

    </div>
    
    </>)

}