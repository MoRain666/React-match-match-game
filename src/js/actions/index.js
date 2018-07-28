export const GET_SCORE = "GET_SCORE";
export const SET_REQUISITES = "SET_REQUISITES";
export const SET_SETTIGNS = "SET_SETTIGNS";
export const SET_BACK = "SET_BACK";


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

export const setSettings = (width, height) => {
    return {
        type: SET_SETTIGNS,
        width: width,
        height: height,
    }
}

export const setBack = (back) => {
    return {
        type: SET_BACK,
        back: back
    }
}