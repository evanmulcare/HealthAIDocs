import React from 'react'

const FileInstructions = ({ title, listElements }) => {
    return (
        <div className='m-2 text-gray-800 border-b pb-4 pt-2'>
            <h2 className='text-xl font-bold text-gray-800 ml-2'>{title}</h2>
            <ol className='list-decimal pl-6'>
                {listElements.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    )
}

export default FileInstructions