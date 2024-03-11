import { makeRequest } from "../common/Api";

// 사용자의 라벨을 출력
export const labelList = async () => {

    try {
      const response = await makeRequest("/labels", "GET");
  
      return response.data;
  
    }
    catch (error) {
      console.error("login Request Error:", error);
      throw error;
    }
  
  };

  // 라벨을 등록
  export const labelAdd = async ( data ) => {

    try{
      const response = await makeRequest("/labels/create", "POST", data);
      console.log(response);

      return "라벨 등록";
    }
    catch (error) {
      console.error( "Error:", error);

      if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
      } else if (error.request) {
          console.log(error.request)
      } else {
          console.log('Error', error.message)
      }
      console.log(error.config)
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
      console.error("Error:", error);

      if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
      } else if (error.request) {
          console.log(error.request)
      } else {
          console.log('Error', error.message)
      }
      console.log(error.config)
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
        console.error("Error:", error);

        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
        throw error;
      }
  }


