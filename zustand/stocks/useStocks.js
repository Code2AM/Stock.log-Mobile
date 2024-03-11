import { create } from "zustand";
import { stockRequest } from "../../api/common/StockAPI";



const useJournals = create((set) => ({
    journals: [],
    setJournals: async () => {
        const journals = await journalRequest();
        set({ journals });
    }
}));

export default useJournals;


const useStocks = create((set) => ({
  stocks : [],
  setStocks : async () => {
    const response = await stockRequest();
    console.log(response)

  }
}))