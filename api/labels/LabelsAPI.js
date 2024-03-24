import { makeRequest } from "../common/Api";

export const labelList = async () => {

    try {
      const response = await makeRequest("/labels/get", "GET");
  
      return response.data;
  
    }
    catch (error) {
      console.error("GET LABELS ERROR", error);
      throw error;
    }
  
  };

  // 라벨을 등록
  export const labelAdd = async ( data ) => {

    try{
      const response = await makeRequest("/labels/create", "POST", data);
      console.log(response);
      
      return response;
    }
    catch (error) {
      console.error("CREATE LABEL ERROR", error);
      throw error;
    }
  }

  // 라벨을 삭제
  export const labelDelete = async ( data ) => {

    try{
      const response = await makeRequest("/labels/delete", "POST", data);
      console.log(response);

      return "라벨 삭제";
    }
    catch (error) {
      console.error("DELETE LABEL ERROR", error);
      throw error;
    }
  }

  // 라벨을 수정
  export const labelUpdate = async (data) => {
    try{
      const response = await makeRequest("/labels/update", "POST", data);
      console.log(response);

      return "라벨 수정";

      }
      catch (error) {
        console.error("UPDATE LABEL ERROR", error);
        throw error;
      }
  }