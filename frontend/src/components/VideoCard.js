import React from 'react'
import { useNavigate } from 'react-router-dom'

const serverLocation = 'https://cms-usry.onrender.com'

const VideoCard = ({video}) => {

    const navigate = useNavigate()

  return (
    <div className="w-[150px] lg:w-[250px] rounded-lg shadow text-white bg-gray-600 border-gray-500">
        <div className="flex flex-col items-center py-4">
            <img className="h-[150px] w-[150px] mb-3 shadow-lg" src={`${serverLocation}/${video.img}`} alt="image"/>
            <h5 className="mb-1 text-xl font-medium text-white">{video.name}</h5>
            <div className="flex mt-4 md:mt-6">
                <button onClick={()=>{navigate(`/video?videoId=${video.id}`)}} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none bg-red-600 hover:bg-red-700 focus:ring-red-800">Play</button>
            </div>
        </div>
    </div>

  )
}

export default VideoCard