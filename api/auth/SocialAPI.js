import axios from "axios";
import { storeTokens } from "./AuthAPI";

const BACKEND_URL = "http://112.222.187.244:8083";

// 카카오 로그인
export const kakaoLoginRequest = async (code) => {

    try {

        const response = await axios.post(
            `${BACKEND_URL}/oauth/kakao`,
            { code },
            { withCredentials: true }
          );

        // 구조분해할당으로 토큰을 저장
        const { accessToken, refreshToken, accessTokenExpiresIn } = response.data;

        await storeTokens(accessToken, refreshToken, accessTokenExpiresIn);

        return response.data;
    }
    catch (error) {
        console.error("Kakao Login Error:", error);
    
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

}