import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../actions/user'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
function UserSearch() {

    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()
    const fetched = useSelector(state => state.user.isFetched)
    const isFail = useSelector(state => state.user.isFail)
    const userState = useSelector(state => state.user)
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage("user", {})

    const redirectToProfile = () => {
        dispatch(getUser(userName))
    }

    useEffect(() => {
        setUser(userState)
    }, [userState, setUser])

    useEffect(() => {
        if (fetched && !isFail) {
            navigate('/profile')
        }
    }, [isFail, fetched, navigate, userName, dispatch])

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
                        onChange={(e) => setUserName(e.target.value)} />
                </div>
                <button
                    className="btn mx-auto px-8 py-2 flex border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    type="button"
                    id="button-addon3"
                    onClick={() => redirectToProfile()}>Open user profile</button>
                {isFail && <div id="toast-danger" class="flex items-center p-4 mx-auto mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                    <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Error icon</span>
                    </div>
                    <div class="ml-3 text-sm font-normal ">There is no user with such username.</div>
                </div>}
            </div>
        </div>
    );
}

export default UserSearch