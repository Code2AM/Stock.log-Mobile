import { makeRequest } from "../common/Api";

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

  export const labelAdd = async ( labelsTitle ) => {

    try{
      const response = await makeRequest("/labels", "POST", labelsTitle);

      return response.data;
    }
    catch (error) {
      console.error("login Request Error:", error);
      throw error;
    }
  }


