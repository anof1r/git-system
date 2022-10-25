import axios from "axios";
import { setRepos, setIsFetched } from "../reducers/reposReducer";

export const getRepos = (username) => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetched(false))
            const responce = await axios.get(`https://api.github.com/users/${username}/repos`)
            dispatch(setRepos(responce.data))
            dispatch(setIsFetched(true))
        } catch (e) {
            dispatch(setIsFetched(false))
        }
    }
}