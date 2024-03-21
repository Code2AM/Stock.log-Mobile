import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BACKEND_URL = "https://www.stocklogdev.shop:8082";

// 토큰 가져오기
const getAccessToken = async () => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  return accessToken;
};


// Header에 토큰 담기
const getHeaders = async () => {
  const accessToken = await getAccessToken();
  const headers = {
    'Content-Type': 'application/json',
  };
  if (accessToken) {
    headers.Authorization = `BEARER ${accessToken}`;
  }
  return headers;
};



// axios 기본 인스턴스 생성
export const request = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true, // 기본 옵션으로 설정
});



// 모든 요청에 헤더 전달
export const makeRequest = async (url, method, data) => {
  const headers = await getHeaders();
  return request({
    url,
    method,
    data,
    headers,
  });
};






















// axios 인터셉터 설정
// axios.interceptors.request.use(async (config) => {
//   const accessToken = await getAccessToken();

//   console.log(accessToken)
//   if (accessToken) {
//     config.headers.Authorization = `BEARER ${accessToken}`;
//   }
//   return config;
// });

// // axios 기본 인스턴스 생성
// export const request = axios.create({
//   baseURL: BACKEND_URL,
//   withCredentials: true, // 기본 옵션으로 설정
// });




















// axios 기본 인스턴스 생성
// export const request = axios.create({
//     baseURL: BACKEND_URL,
//     withCredentials: true, // 기본 옵션으로 설정
//     headers: async () => {
//       const accessToken = await getAccessToken();
//       return {
//         headers :{
//           Authorization: `BEARER ${accessToken}`,
//         }
//       };
//     },
//   });
