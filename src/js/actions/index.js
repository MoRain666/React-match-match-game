export const GET_SCORE = "GET_SCORE";


export const getScore = (data) => {
    return {
        type: GET_SCORE,
        payload: data
    }
}