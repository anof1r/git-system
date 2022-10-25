import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import { getCommits } from '../../actions/commits';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import RepoRow from "./RepoRow"

function RepoCommits() {
    const dispatch = useDispatch()
    //const user = useSelector(state => state.user.username)
    const navigate = useNavigate()
    const commits = useSelector(state => state.commits.items)
    const location = useLocation();
    const [user, setUser] = useLocalStorage("user", {})

    useEffect(() => {
        dispatch(getCommits(user.username, location.state))
    }, [dispatch, location.state, user])

    console.log(location)
    return (
        <>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={() => navigate(-1)}>
                Go back
            </button>
            <div className="grid grid-cols-3 gap-4 text-center divide-x-4 divide-gray-200 px-10">
                <div className=" p-8 font-bold">Author</div>
                <div className=" p-8 font-bold">Commit Hash</div>
                <div className=" p-8 font-bold">Date</div>
            </div>
            {commits.map(commit => {
                return (<RepoRow commit={commit} key={commit.sha} />)
            })}
        </>

    )
}

export default RepoCommits