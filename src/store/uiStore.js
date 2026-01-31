import { create } from "zustand";

export const useUIStore= create((set)=>({
  sidebarOpen:false,
  open:()=>set({sidebarOpen:true}),
  close:()=>set({sidebarOpen:false}),
}));