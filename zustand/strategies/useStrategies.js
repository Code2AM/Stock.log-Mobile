import { create } from "zustand";
import { strategiesRequest } from "../../api/strategies/StrategiesAPI";


export const useStrategies = create((set) => ({
  
    strategies : [],

    /* 사용자의 매매전략을 가져온다 */
    fetchStrategies: async () => {
      const fetchedStrategies = await strategiesRequest();

      console.log("fetchedStrategies")
      console.log(fetchedStrategies)

      set({ strategies : fetchedStrategies})
    }
}))