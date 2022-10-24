import React from 'react'

function GridRow({ repo }) {
    return (
        <div className='border'>
            <div className='grid grid-cols-4 gap-4 text-center px-10 divide-x-4 divide-gray-200'>
                <div className=" p-8 ">{repo.name}</div>
                <div className=" p-8">{repo.language}</div>
                <div className=" p-8">{repo.description}</div>
                <div className=" p-8">{repo.stargazers_count}</div>
            </div>
        </div>
    )
}

export default GridRow