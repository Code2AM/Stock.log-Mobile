import { makeRequest } from "../common/Api";



/* 신규 노트 API */
export const newNoteRequest = async (data) => {
    try {
        const response = await makeRequest("/notes/create", "POST", data)

        return response;
    }
    catch (error) {
        console.error("newNoteRequest Error:", error);

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


/* 모든 노트 API */
export const notesRequest = async () => {
    try {
        console.log("noteRequest")

        const response = await makeRequest("/notes/allNotes", "POST")

        return response.data
    }
    catch (error) {
        console.error("newNoteRequest Error:", error);

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

export const updateNoteRequest = async (data) => {
    try {
        const response = await makeRequest("/notes/update", "POST", data);
        return response.data;
    }
    catch (error) {
        console.error("newNoteRequest Error:", error);

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

export const deleteNoteRequest = async (data) => {
    try {
        const response = await makeRequest("/notes/delete", "POST", data);
        return response.data;
    }
    catch (error) {
        console.error("newNoteRequest Error:", error);

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

















