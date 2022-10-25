import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from '../../actions/repos'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { setIsFetched } from '../../reducers/usersReducer'
import GridRow from './GridRow'

function UserPage() {
    const dispatch = useDispatch()
    //const user = useSelector(state => state.user.username)
    // const img = useSelector(state => state.user.avatar_url)
    const repos = useSelector(state => state.repos.items)
    const [userLS, setUserLS] = useLocalStorage("user", {})

    useEffect(() => {
        dispatch(getRepos(userLS.username))
    }, [userLS, dispatch])

    dispatch(setIsFetched(false))

    return (
        <>
            <h1 className="text-3xl font-bold underline text-center">
                {userLS.username} Profile :
            </h1>
            <img src={userLS.avatar_url} alt="" className='mx-auto rounded-full' />

            <h1 className="text-3xl font-bold underline text-center">
                {userLS.username} Repositories :
            </h1>
            <div className="grid grid-cols-4 gap-4 text-center divide-x-4 divide-gray-200 px-10">
                <div className=" p-8 font-bold">Name</div>
                <div className=" p-8 font-bold">Programming language</div>
                <div className=" p-8 font-bold">Description</div>
                <div className=" p-8 font-bold">Stars</div>
            </div>
            {repos.map(repo => {
                return (<GridRow repo={repo} key={repo.id} />)
            })}
        </>
    )
}

export default UserPage