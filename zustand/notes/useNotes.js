import { create } from "zustand";

export const useNotes = create((set) => ({
  notes : [],
  setNotes: (newNotes)=>set({notes : newNotes}),
}));