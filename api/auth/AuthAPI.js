import { makeRequest } from "../common/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";



// 회원가입 요청 API
export const signupRequest = async (data) => {

  console.log(data)

  try {
    const response = await makeRequest("/auth/signup", "POST", data);

    // const response = await request.post("/auth/signup", { ...data });
    // 성공적으로 응답을 받은 경우
    return response.data;
  } catch (error) {
    console.error("Signup Request Error:", error);

    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      // 요청이 이루어 졌으나 응답을 받지 못했습니다.
      // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
      // Node.js의 http.ClientRequest 인스턴스입니다.
      console.log(error.request)
    } else {
      // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
      console.log('Error', error.message)
    }
    console.log(error.config)
    throw error;
  }
};


// 로그인 요청 API
export const loginRequest = async (data) => {

  try {
    const response = await makeRequest("auth/login", "POST", data);
    // const response = await request.post("auth/login", { ...data });
    // 성공적으로 로그인한 경우

    // 구조분해할당으로 토큰을 저장
    const { accessToken, refreshToken, accessTokenExpiresIn } = response.data;

    await storeTokens(accessToken, refreshToken, accessTokenExpiresIn);

    return response.data;

  }
  catch (error) {
    console.error("login Request Error:", error);

    
    console.log("상세 에러 트레킹")

    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {

      // 요청이 이루어 졌으나 응답을 받지 못했습니다.
      // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
      // Node.js의 http.ClientRequest 인스턴스입니다.
      console.log(error.request)
    } else {

      // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
      console.log('Error', error.message)
    }
    console.log(error.config)
    throw error;

  }

};



// 로그아웃 요청 API
export const logoutRequest = async (data) => {

  try {
    const response = await makeRequest("auth/logout", "POST", data);

    return response.data;

  }
  catch (error) {
    console.error("login Request Error:", error);
    throw error;
  }

};


// 로그아웃 요청 API
export const changePasswordRequest = async (data) => {

  try {
    const response = await makeRequest("auth/changePassword", "POST", data);

    return response.data;

  }
  catch (error) {
    console.error("changePassword Error:", error);
    throw error;
  }

};



// 토큰 저장
export const storeTokens = async (accessToken, refreshToken, accessTokenExpiresIn) => {

  console.log("fdsfdsf")
  console.log(accessToken)
  console.log(refreshToken)
  console.log(accessTokenExpiresIn)

  try {
    await AsyncStorage.setItem("accessToken", accessToken);
    await AsyncStorage.setItem("refreshToken", refreshToken);
    await AsyncStorage.setItem("expiresAt", JSON.stringify(Date.now() + accessTokenExpiresIn));
    await AsyncStorage.setItem("Logined", "true");
    console.log("Tokens stored successfully!");
  } catch (error) {
    console.error("Error storing tokens:", error);
    // Handle storage failures gracefully (e.g., display an error message)
  }
};





