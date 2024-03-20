import { create } from "zustand";


export const useAuth = create((set) => ({
  
    isSignedIn : false,

    setIsSignedIn:  (value) => {
      set({ isSignedIn : value})
    }
}))