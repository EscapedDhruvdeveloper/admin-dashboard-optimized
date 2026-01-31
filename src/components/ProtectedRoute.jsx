import { create } from "zustand";
import { Navigate } from "react-router-dom";

const useAuthStore = create((set) => ({
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

const ProtectedRoute = ({children})=>{
    const token=useAuthStore((state)=>state.token);
    return token ? children : <Navigate to="/login" replace/>
}

export default ProtectedRoute;
