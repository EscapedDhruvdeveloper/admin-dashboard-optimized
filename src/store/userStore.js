import { create } from "zustand";

export const useAuthStore = create((set) => ({
    token:localStorage.getItem("token"),
    login:()=>{
        localStorage.setItem("token","dummy-token");
        set({token:"dummy-token"});
    },
    logout:()=>{
        localStorage.removeItem("token");
        set({token:null});
    }
}));