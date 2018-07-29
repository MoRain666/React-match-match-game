export const GET_SCORE = "GET_SCORE";
export const SET_REQUISITES = "SET_REQUISITES";
export const SET_SETTIGNS = "SET_SETTIGNS";
export const SET_BACK = "SET_BACK";
export const SET_NEW_TIME = "SET_NEW_TIME";
export const SET_TIME = "SET_TIME";
export const SHIRTS_INIT = "SHIRTS_INIT";


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

export const setNewTime = (currentTime) => {
    return {
        type: SET_NEW_TIME,
        currentTime: currentTime
    }
}

export const setTime = () => {
    return {
        type: SET_TIME
    }
}

export const shirtsInit = (width) => {
    return {
        type: SHIRTS_INIT,
        payload: width
    }
}