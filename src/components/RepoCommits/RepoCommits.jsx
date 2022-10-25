import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import { getCommits } from '../../actions/commits';
import RepoRow from "./RepoRow"
function RepoCommits() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.username)
    const navigate = useNavigate()
    const commits = useSelector(state => state.commits.items)
    const location = useLocation();

    useEffect(() => {
        dispatch(getCommits(user, location.state))
    }, [dispatch, location.state, user])

    console.log(location)
    return (
        <>
            <button onClick={() => navigate(-1)}>go back</button>
            <div className="grid grid-cols-3 gap-4 text-center divide-x-4 divide-gray-200 px-10">
                <div className=" p-8 font-bold">Author</div>
                <div className=" p-8 font-bold">Commit Hash</div>
                <div className=" p-8 font-bold">Date</div>
            </div>
            {commits.map(commit => {
                return(<RepoRow commit={commit}/>)
            })}
        </>

    )
}

export default RepoCommits