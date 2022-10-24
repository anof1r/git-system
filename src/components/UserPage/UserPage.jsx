import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsFetched } from '../../reducers/usersReducer'

function UserPage() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.username)
    const img = useSelector(state => state.user.avatar_url)

    dispatch(setIsFetched(false))

    return (
        <>
            <div>{user}</div>
            <img src={img} alt=''></img>
        </>
    )
}

export default UserPage