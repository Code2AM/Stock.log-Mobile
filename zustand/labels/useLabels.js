import { create } from "zustand";
import { labelList } from "../../api/labels/LabelsAPI";

export const useLabels = create((set) => ({

    labels : [],
  
    setLabels: (newLabels)=>set({labels : newLabels}),
  
    /* 사용자의 모든 라벨을 가져온다 */
    fetchAllLabels: async () => {
      const fetchedLabels = await labelList();
  
      set({labels : fetchedLabels})
    },
  
    /* 사용자의 노트를 업데이트 */
  
  }));