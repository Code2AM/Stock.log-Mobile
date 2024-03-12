import { makeRequest } from "../common/Api"


// 매매 코멘트 조회
export const callCommentsRequest = async (data) => {
    try {

        const response = await makeRequest("/comments/read", "POST", data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// 매매 코멘트 삭제
export const deleteCommentRequest = async (data) => {
    try {
        const response = await makeRequest("/comments/delete", "POST", data);
    } catch (error) {
        console.error(error);
    }
}

// 매매 코멘트 등록
export const registCommentRequest = async (data) => {
    try {
        const response = await makeRequest("/comments", "POST", data);
    } catch (error) {
        console.error(error);
    }
}