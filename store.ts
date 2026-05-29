import { create } from "zustand";

interface prop{
   name:string
   changeName:()=>void
}
const UseNotesStore = create<prop>((set) => ({

    name:"DEBOJIT",
    changeName: () => set((state)=>{
       return{name:state.name ==="DEBOJIT"?"RONNY":"DEBOJIT"}
    }),


}))
export default UseNotesStore