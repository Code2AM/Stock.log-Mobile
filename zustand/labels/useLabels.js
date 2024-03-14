import { create } from "zustand";
import { labelList } from "../../api/labels/LabelsAPI";

const useLabels = create((set) => ({

    labels : [],
  
    setLabels: (newLabels)=>set({labels : newLabels}),
  
    /* 사용자의 모든 라벨을 가져온다 */
    fetchAllLabels: async () => {
      const fetchedLabels = await labelList();

      console.log("useLabels");
      console.log(fetchedLabels);
  
      set({labels : fetchedLabels})
    }

    
  }));
  
  export default useLabels;