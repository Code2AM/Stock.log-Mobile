import { create } from "zustand";
import { journalRequest } from "../../api/journals/JournalsAPI";


const useJournals = create((set) => ({
    journals: [],
    setJournals: async () => {
        const journals = await journalRequest();
        set({ journals });
    }
}));

export default useJournals;