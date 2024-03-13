import { makeRequest } from "../common/Api";



/* 신규 노트 API */
export const newNoteRequest = async (data) => {
    try {
        const response = await makeRequest("/notes/create", "POST", data)
        console.log(response)

        return response;
    }
    catch (error) {
        console.error("newNoteRequest Error:", error);
    }
}


/* 모든 노트 API */
export const notesRequest = async () => {
    try {
        console.log("noteRequest")

        const response = await makeRequest("/notes/allNotes", "POST")
        console.log(response)

        return response.data
    }
    catch (error) {
        console.error("newNoteRequest Error:", error);

    }
}

export const updateNoteRequest = async (data) => {
    try {
        const response = await makeRequest("/notes/update", "POST", data);
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        console.error("newNoteRequest Error:", error);

    }
}

export const deleteNoteRequest = async (data) => {
    try {
        const response = await makeRequest("/notes/delete", "POST", data);
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        console.error("newNoteRequest Error:", error);

    }
}

















