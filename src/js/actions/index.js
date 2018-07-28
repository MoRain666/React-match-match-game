export const GET_SCORE = "GET_SCORE";
export const SET_REQUISITES = "SET_REQUISITES";


export const getScore = (data) => {
    return {
        type: GET_SCORE,
        payload: data
    }
}

export const setRequisites = (name, email) => {
    return {
        type: SET_REQUISITES,
        name: name,
        email: email
    }
}