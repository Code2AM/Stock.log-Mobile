import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


// const BACKEND_URL = dotenv.get('BACKEND_URL')
const BACKEND_URL = "http://localhost:8080"


// 토큰 가져오기
const getAccessToken = async () => {
    const accessToken = await AsyncStorage.getItem("accessToken");
    return accessToken;
  };


// axios 기본 인스턴스 생성
export const request = axios.create({
    baseURL: BACKEND_URL,
    withCredentials: true, // 기본 옵션으로 설정
    headers: async () => {
      const accessToken = await getAccessToken();
      return {
        Authorization: `BEARER ${accessToken}`,
      };
    },
  });
