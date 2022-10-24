const SET_USER = "SET_USER"
const SET_IS_FETCHING = "IS_FETCHING"
const SET_FAIL = "SET_FAIL"
const initialState = {
    username: "",
    name: "",
    isFetching: true,
    isFail: false
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                username: action.payload.login,
                name: action.payload.name,
                isFetching: false,
                isFail: false
            }
        case SET_FAIL:
            return {
                ...state,
                isFail: action.payload
            }
        default:
            return state
    }
}

export const setUser = (user) => ({ type: SET_USER, payload: user })
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool })
export const setFail = (bool) => ({ type: SET_FAIL, payload: bool })