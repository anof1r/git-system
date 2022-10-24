import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../../actions/user'
import { useNavigate } from 'react-router-dom'
function UserSearch() {

    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()
    const fail = useSelector(state => state.user.isFail)
    const user = useSelector(state => state.user)
    const navigate = useNavigate();

    const redirectToProfile = () => {
      dispatch(getUser(userName))
      if (!fail) {
        navigate('/profile', { state: {username: userName} })
      } else {
        console.log("There is no user with such username")
      }
    }

    console.log(user.isFail)

    return (
        <div className="flex justify-center h-screen items-center ">
          <div className="mb-3 xl:w-96 ">
            <div className="input-group relative flex w-full mb-4">
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
                onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <button
                className="btn px-8 py-2 flex border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="button"
                id="button-addon3"
                onClick={() => redirectToProfile()}>Open user profile</button>
                {fail ? <span>Error</span> : <span>{user.username}</span>}
          </div>
        </div>
      );
}

export default UserSearch