import { makeRequest, request } from "../common/Api";



// // 매매일지 목록 조회
// export const callJournalList = async () => {
//     return await makeRequest.get("/journals/search");
// };


// const getJournals = async () => await (makeRequest("/journals", "GET"));
// setJournals(getJournals);
// console.log(getJournals);



export const journalRequest = async () => {

    try {
      const response = await makeRequest("/journals", "GET" );
  
      return response.data;
  
    }
    catch (error) {
      console.error("매매일지 조회 요청 실패");
      throw error;
    }
  
  };