import { request } from "../common/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";



// 회원가입 요청 API
export const signupRequest = async (data) => {

  try {
    const response = await request.post("/auth/signup", { ...data });
    // 성공적으로 응답을 받은 경우
    return response.data;
  } catch (error) {
    console.error("Signup Request Error:", error);
    throw error; 
  }

};


// 로그인 요청 API
export const loginRequest = async (data) => {

  try {
    const response = await request.post("auth/login", { ...data } );
    // 성공적으로 로그인한 경우

    // 구조분해할당으로 토큰을 저장
    const { accessToken, refreshToken, accessTokenExpiresIn } = response.data;

    await storeTokens({ accessToken, refreshToken, accessTokenExpiresIn });

    return response.data;

  } 
  catch (error) {
    console.error("login Request Error:", error);
    throw error; 
  }

};

// Secure token storage using AsyncStorage
export const storeTokens = async (tokens) => {
    const { accessToken, refreshToken, accessTokenExpiresIn } = tokens;
  
    try {
      await AsyncStorage.multiSet([
        ["accessToken", accessToken],
        ["refreshToken", refreshToken],
        ["expiresAt", JSON.stringify(Date.now() + accessTokenExpiresIn)], // Store expiry time as a string for reliable parsing
        ["isLogin", "true"], // Consider using a boolean value instead of "true"
      ]);
      console.log("Tokens stored successfully!");
    } catch (error) {
      console.error("Error storing tokens:", error);
      // Handle storage failures gracefully (e.g., display an error message)
    }
  };





