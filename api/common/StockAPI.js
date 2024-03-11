import { makeRequest } from "./Api";

const SERVICE_KEY = process.env.EXPO_PUBLIC_SERVICE_KEY;
const MAX_STOCKS = 10000000;


export const stockRequest = async () => {
  
    const REQUEST_URL = `https://apis.data.go.kr/1160100/service/GetKrxListedInfoService/getItemInfo?serviceKey=${SERVICE_KEY}&numOfRows=${MAX_STOCKS}`

    try {
        const response = await makeRequest(REQUEST_URL, "GET");

        console.log(data);
        return response.data;
    }
    catch (error) {
        console.error("Stock Request Error:", error);
    }
}