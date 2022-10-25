import axios from "axios";
import { setRepos, setIsFetched } from "../reducers/reposReducer";

export const getRepos = (userName) => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetched(false))
            const responce = await axios.get(`https://api.github.com/users/${userName}/repos`)
            dispatch(setRepos(responce.data))
            dispatch(setIsFetched(true))
        } catch (e) {
            dispatch(setIsFetched(false))
        }
    }
}