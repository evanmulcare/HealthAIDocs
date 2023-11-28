import React from 'react'

const FileVideo = ({title, videoURL}) => {
  return (
    <div className='border-b'>
    <h1 className='text-3xl font-bold text-gray-800 ml-5 mb-5 mt-5'>{title}</h1>
    <div className="max-w-screen-lg mx-auto mb-8">
        <iframe
          title="YouTube Video"
          className="w-full aspect-video"
          src={videoURL}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
  </div>
  )
}

export default FileVideo