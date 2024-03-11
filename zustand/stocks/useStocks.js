import { create } from "zustand";
import { stockRequest } from "../../api/common/StockAPI";

export const useStocks = create((set) => ({
    stocks: [],
    fetchStocks: async () => {
        const fetchedStocks = await stockRequest();

        console.log("this is useStocks")
        console.log(fetchedStocks)

        set({ stocks: fetchedStocks })
    }

    
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

