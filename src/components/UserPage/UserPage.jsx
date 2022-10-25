import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from '../../actions/repos'
import { setIsFetched } from '../../reducers/usersReducer'
import GridRow from './GridRow'

function UserPage() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.username)
    const img = useSelector(state => state.user.avatar_url)
    const repos = useSelector(state => state.repos.items)
    const isFetched = useSelector(state => state.repos.isFetched)

    useEffect(() => {
        dispatch(getRepos(user))
    }, [user, dispatch])

    dispatch(setIsFetched(false))

    return (
        <>
            <h1 className="text-3xl font-bold underline text-center">
                {user} Profile :
            </h1>
            {
                isFetched === true
                    ?
                    <>
                        <img src={img} alt="" className='mx-auto rounded-full' />
                        <h1 className="text-3xl font-bold underline text-center">
                            {user} Repositories :
                        </h1>
                        <div className="grid grid-cols-4 gap-4 text-center divide-x-4 divide-gray-200 px-10">
                            <div className=" p-8 font-bold">Name</div>
                            <div className=" p-8 font-bold">Programming language</div>
                            <div className=" p-8 font-bold">Description</div>
                            <div className=" p-8 font-bold">Stars</div>
                        </div>
                    </>
                    :
                    <div role="status" className='flex justify-center h-screen items-center'>
                        <svg fill="none" height="300" viewBox="0 0 20 20" width="300" xmlns="http://www.w3.org/2000/svg" className='animate-spin'>
                            <path d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z" fill="#212121" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
            }
            {repos.map(repo => {
                return (<GridRow repo={repo} key={repo.id} />)
            })}
        </>

    )
}

export default UserPage