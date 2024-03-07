
export const labelRequest = async () => {

    try {
      const response = await makeRequest("/labels", "GET");
  
      return response.data;
  
    }
    catch (error) {
      console.error("login Request Error:", error);
      throw error;
    }
  
  };