const SET_COMMITS = "SET_COMMITS"
const SET_IS_FETCHED = "IS_FETCHED"

const initialState = {
    items: [],
    isFetched: false,
}

export default function reposReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COMMITS:
            return {
                ...state,
                items: action.payload,
                isFetched: true
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

export const setCommits = (commits) => ({ type: SET_COMMITS, payload: commits })
export const setIsFetched = (bool) => ({ type: SET_IS_FETCHED, payload: bool })