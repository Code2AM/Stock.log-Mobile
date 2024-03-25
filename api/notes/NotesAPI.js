import { makeRequest } from "../common/Api";



/* 신규 노트 API */
export const newNoteRequest = async (data) => {
    try {
        const response = await makeRequest("/notes/create", "POST", data)

        return response;
    }
    catch (error) {
        console.error("CREATE NOTE ERROR ", error);
        throw error;
    }
}


/* 모든 노트 API */
export const notesRequest = async () => {
    try {
        console.log("noteRequest")

        const response = await makeRequest("/notes/allNotes", "GET")

        return response.data
    }
    catch (error) {
        console.error("GET ALL NOTE ERROR ", error);
        throw error;

    }
}

export const updateNoteRequest = async (data) => {
    try {
        const response = await makeRequest("/notes/update", "POST", data);
        return response.data;
    }
    catch (error) {
        console.error("UPDATE NOTE ERROR ", error);
        throw error;
    }
}

export const deleteNoteRequest = async (data) => {
    try {
        const response = await makeRequest("/notes/delete", "POST", data);
        return response.data;
    }
    catch (error) {
        console.error("DELETE NOTE ERROR ", error);
        throw error;
    }
}