const SET_USER = "SET_USER"
const SET_IS_FETCHED = "IS_FETCHED"
const SET_FAIL = "SET_FAIL"

const initialState = {
    username: "",
    name: "",
    isFetched: false,
    isFail: false,
    avatar_url: ""
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                username: action.payload.login,
                name: action.payload.name,
                avatar_url: action.payload.avatar_url,
            }
        case SET_FAIL:
            return {
                ...state,
                isFail: action.payload
            }
        case SET_IS_FETCHED:
            return {
                ...state,
                isFetched: action.payload
            }
        default:
            return state
    }
}

export const setUser = (user) => ({ type: SET_USER, payload: user })
export const setIsFetched = (bool) => ({ type: SET_IS_FETCHED, payload: bool })
export const setFail = (bool) => ({ type: SET_FAIL, payload: bool })