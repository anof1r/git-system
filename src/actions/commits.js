import axios from "axios";
import { setCommits, setIsFetched } from "../reducers/commitsReducer";


export const getCommits = (username, repositoryName) => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetched(false))
            const responce = await axios.get(`https://api.github.com/repos/${username}/${repositoryName}/commits`)
            dispatch(setCommits(responce.data))
            dispatch(setIsFetched(true))
        } catch (e) {
            dispatch(setIsFetched(false))
        }
    }
}