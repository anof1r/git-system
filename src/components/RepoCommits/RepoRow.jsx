import React from 'react'

function RepoRow({ commit }) {
    return (
        <div className='border'>
            <div className='grid grid-cols-3 gap-4 text-center px-10 divide-x-4 divide-gray-200'>
                <div className="p-8">{commit.commit.author.name}</div>
                <div className="p-8">{commit.sha}</div>
                <div className="p-8">{commit.commit.author.date}</div>
            </div>
        </div>
    )
}

export default RepoRow