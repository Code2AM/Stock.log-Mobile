
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeRequest } from "./Api";

const SERVICE_KEY = "IbT4rQ05kHSxow5C8rcu%2F4AtxMS6PW%2Fi7FP0dC%2BxzmNn%2FVZIAlLGi5wvOFad4jca3Cz%2FqOf1gnoD%2FB3HRcNr8w%3D%3D";

const MAX_STOCKS = 300000;

export const stockRequest = async () => {
  
    const REQUEST_URL = `https://apis.data.go.kr/1160100/service/GetKrxListedInfoService/getItemInfo?serviceKey=${SERVICE_KEY}&numOfRows=${MAX_STOCKS}&resultType=json`

    try {
        const response = await makeRequest(REQUEST_URL, "GET");

        const data = response.data;
        const items = data.response.body.items.item;
        console.log(items instanceof Object);
        console.log(items);

        return items;
    }
    catch (error) {
        console.error("STOCK REQUEST ERROR ", error);
        throw error;
    }
}

export const storeStocks = async ({value}) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('stocks', jsonValue);
      } catch (e) {
        console.log("종목 저장 실패");
        console.error(e);
        throw error;
      }
}

export const getStocks = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('stocks');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log("종목 조회 실패");
        console.error(e);
        throw error;
    }
  };