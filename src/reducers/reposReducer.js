const SET_REPOS = "SET_REPOS"
const SET_IS_FETCHED = "IS_FETCHED"

const initialState = {
    items: [],
    isFetched: false,
}

export default function reposReducer(state = initialState, action) {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload,
                isFetched: true
            }
        default:
            return state
    }
}

export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos })
export const setIsFetched = (bool) => ({ type: SET_IS_FETCHED, payload: bool })