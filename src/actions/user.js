import axios from "axios"
import { setFail, setIsFetched, setUser } from "../reducers/usersReducer"

export const getUser = (username) => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetched(false))
            const responce = await axios.get(`https://api.github.com/users/${username}`)
            dispatch(setUser(responce.data))
            dispatch(setFail(false))
            dispatch(setIsFetched(true))
        } catch (e) {
            dispatch(setFail(true))
            setTimeout(() => {
                dispatch(setFail(false))
              }, "3000")
        }
    }
}