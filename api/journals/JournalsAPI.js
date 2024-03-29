import { makeRequest, request } from "../common/Api";



// // 매매일지 목록 조회
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

// 매수기록 조회
export const buyRequest = async (journals) => {
    try {
        const response = await makeRequest("/buy/list", "POST", {...journals});
    return response.data;
    } catch (error) {
        console.error(error);
    }
}

// 매도기록 조회
export const SellRequest = async (journals) => {
  try {
    const response = await makeRequest("/sell/list", "POST", {...journals});
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// 매수 추가
export const postBuyRequest = async (data) => {
  try {
    const response = await makeRequest("/buy", "POST", data);
  } catch (error) {
    console.error(error);
  }
}

// 매도 추가
export const postSellRequest = async (data) => {
  try {
    const response = await makeRequest("/sell", "POST", data);
  } catch (error) {
    console.error(error);
  }
}

// 매매일지 삭제
export const deleteJournalsRequest = async (data) => {
  try {
    const response = await makeRequest("/journals/delete", "POST", data)
  } catch (error) {
    console.error(error);
  }
}

// 매매일지 추가
export const createJournalsRequest = async (data) => {
  try {
    const response = await makeRequest("/journals", "POST", data)
    console.log(response);
  } catch (error) {
    console.error("일지 등록 실패");
  }
}

// 매수기록 삭제
export const deleteBuyRequest = async (data) => {
  try {
    const response = await makeRequest("/buy/delete", "POST", data);
  } catch (error) {
    console.error("매수 기록 삭제 실패");
  }
  
}

// 매도기록 삭제
export const deleteSellRequest = async (data) => {
  try {
    const response = await makeRequest("/sell/delete", "POST", data);
  } catch (error) {
    console.error(error);
  }
}

// 매매일지 상태 변경
export const changeJournalsStatusRequest = async (data) => {
  try {
    const response = await makeRequest("/journals/change", "POST", data);
  } catch (error) {
    console.error(error);
  }
}