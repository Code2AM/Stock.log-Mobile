import { makeRequest } from "../common/Api"


/* 사용자의 매매전략을 불러오는 메소드 */
export const strategiesRequest = async () => {
    try {
        console.log("strategiesRequest")

        const response = await makeRequest("/strategies/findAll", "GET")
        return response.data
    }
    catch (error) {
        console.error("GET ALL STRATEGIES ERROR", error);

        throw error;
    }
}

/* 새 매매전략  */
export const newStrategyRequest = async (data) => {
    try {
        console.log("newStrategyRequest")

        const response = await makeRequest("/strategies/create", "POST", data)
        console.log(response)

        return response.data
    }
    catch (error) {

        console.error("CREATE STRATEGY ERROR", error);

        throw error;
    }
}


/* 매매전략 수정 */
export const updateStrateyRequest = async (data) => {
    try {
        console.log("updateStrateyRequest")

        const response = await makeRequest("/strategies/update", "POST", data)
        console.log(response)

        return response.data
    }
    catch (error) {
        console.error("UPDATE STRATEGY ERROR", error);

        throw error;
    }
}

/* 매매전략 삭제 */
export const deleteStrategyRequest = async (data) => {
    try {
        console.log("deleteStrategyRequest")

        const response = await makeRequest("/strategies/delete", "POST", data)
        console.log(response)

        return response.data
    }
    catch (error) {
        console.error("DELETE STRATEGY ERROR", error);

        throw error;
    }
}

/* 특정 매매전략 조회 */
export const strategyFindByIdRequest = async (data) => {

    try {
        const response = await makeRequest("/strategies/read", "POST", data);
        const result = response.data.strategyName;
        return result;
    } catch (error) {
        console.error("GET STRATEGY BY ID ERROR", error);
        
        throw error;
    }
}