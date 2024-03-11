
import { makeRequest } from "./Api";


const SERVICE_KEY = process.env.EXPO_PUBLIC_STOCK_SERVICE_KEY;

// 주식 종목을 몇개 저장할 것인가?
const MAX_STOCKS = 3;


export const stockRequest = async () => {
  
    const REQUEST_URL = `https://apis.data.go.kr/1160100/service/GetKrxListedInfoService/getItemInfo?serviceKey=${SERVICE_KEY}&numOfRows=${MAX_STOCKS}&resultType=json`

    try {
        const response = await makeRequest(REQUEST_URL, "GET");

        const data = response.data;
        const items = data.response.body.items.item;

        return items;
    }
    catch (error) {
        console.error("Stock Request Error:", error);
    }
}