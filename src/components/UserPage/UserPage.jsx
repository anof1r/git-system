import React from 'react'
import { useLocation } from 'react-router-dom'
function UserPage() {
    const {state} = useLocation()
  return (
    <div>{state.username}</div>
  )
}

export default UserPage