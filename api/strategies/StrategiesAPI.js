import { makeRequest } from "../common/Api"


/* 사용자의 매매전략을 불러오는 메소드 */
export const strategiesRequest = async () => {
    try {
        console.log("strategiesRequest")

        const response = await makeRequest("/strategies/findAll", "POST")
        return response.data
    }
    catch (error) {
        console.error("strategiesRequest Error:", error);

        if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        } else if (error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
        console.log(error.config)
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
        console.error("newStrategyRequest Error:", error);

        if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        } else if (error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
        console.log(error.config)
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
        console.error("updateStrateyRequest Error:", error);

        if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        } else if (error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
        console.log(error.config)
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
        console.error("deleteStrategyRequest Error:", error);

        if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        } else if (error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
        console.log(error.config)
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
        console.error("strategyFindByIdRequest Error", error);
    }
}