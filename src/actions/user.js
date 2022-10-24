import axios from "axios"
import { setFail, setIsFetching, setUser } from "../reducers/usersReducer"

export const getUser = (userName) => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const responce = await axios.get(`https://api.github.com/users/${userName}`)
            dispatch(setUser(responce.data))
            dispatch(setFail(false))
        } catch (e) {
            dispatch(setFail(true))
            dispatch(setIsFetching(false))
        }
    }
}