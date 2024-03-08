import { create } from "zustand";
import { notesRequest } from "../../api/notes/NotesAPI";

export const useNotes = create((set) => ({

  notes : [],

  setNotes: (newNotes)=>set({notes : newNotes}),

  /* 사용자의 모든 노트들을 가져온다 */
  fetchAllNotes: async () => {
    const fetchedNotes = await notesRequest();

    set({notes : fetchedNotes})
  },

  /* 사용자의 노트를 업데이트 */

}));