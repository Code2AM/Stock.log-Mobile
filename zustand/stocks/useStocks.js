import { create } from "zustand";
import { stockRequest } from "../../api/common/StockAPI";

export const useStocks = create((set) => ({
    stocks: [],
    fetchStocks: async () => {
        const fetchedStocks = await stockRequest();

        set({ stocks: fetchedStocks })
    },
    setStocks:(value) => set({stocks:value})

    
}))

const stock = { 
    "basDt": "20240308",
 "corpNm": "동화약품(주)",
  "crno": "1101110043870",
   "isinCd": "KR7000020008",
    "itmsNm": "동화약품",
     "mrktCtg": "KOSPI",
      "srtnCd": "A000020" 
    }

