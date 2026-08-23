"use client"
import {useState,useEffect} from "react"
import Notecard from "./notecard"
import axios from "axios";
import { BookOpen } from 'lucide-react';
import { useUser } from "@clerk/nextjs";
import Loadingcomponent from "./loading"

interface note{
  id:string;
  title:string;
  subject:string;
  forsem:string;
  
  uploader:{
     username :string
  };
  createdAt:string | Date;
  link:string;
  fileurl:string,
}
export default function NoteGrid() {
 
     const { user,isLoaded } = useUser();
     const [error,seterror]=useState("")
  const [notes,setnotes]=useState<note[]>([]);
  const [Isloading,Setloading]=useState<boolean>(true)
   
  

  useEffect(()=>{

    const Notesdata=async()=>{

       if(!user?.id || !isLoaded){
      
        return  
       }  
       
         try {
 const res= await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/recomdedfeed/${user?.id}`)
           // console.log(res.data.data)
           const Notes=res.data.data.data
            setnotes(Notes)

            if(Isloading && user?.id ){
     Setloading(false)
  }
            
            
         } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
      seterror(error.response.data.data.message);
    } else {
      seterror("An unexpected error occurred");
    }
          console.log(error);
          Setloading(false)
         }
    }
    Notesdata()

   
  },[user?.id,isLoaded])
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
       {  
       Isloading ? <Loadingcomponent/> : notes.length === 0? <div className="flex flex-col items-center justify-center py-20">
  <div className="rounded-full bg-indigo-100 p-5">
    <BookOpen className="h-12 w-12 text-indigo-600" />
  </div>

  <h2 className={`mt-6 text-2xl font-bold text-slate-900${error ? "text-red-600" : "text-indigo-600"}`}>
    {
        error|| "No Recommended Notes"
    }
  </h2>

  <p className="mt-2 max-w-md text-center text-slate-500">
    We couldn t find any notes matching your semester and stream yet.
    Check back later or explore all available notes.
  </p>
</div>:
       <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

        {notes.map((note:note) => (
          <Notecard key={note.id}
            
            title={note.title}
            subject={note.subject}
            forsem={note.forsem}
            uploader={note.uploader}
           uploadedAt={note.createdAt}
           link={note.fileurl}
          />
        ))}

      </div>
}

    </section>
  );
}