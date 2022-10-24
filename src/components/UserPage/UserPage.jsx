import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getUser } from '../../actions/user'

function UserPage() {
    const {state} = useLocation()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.username)
    const img = useSelector(state => state.user.avatar_url)
    useEffect(() => {
        dispatch(getUser(state.username))
    }, [])

    console.log(img)
  return (
    <>
        <div>{user}</div>
        <img src={img} alt=''></img>
    </>

  )
}

export default UserPage