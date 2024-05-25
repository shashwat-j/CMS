import React from 'react'
import { useNavigate } from 'react-router-dom'

const VideoCard = ({video}) => {

    const navigate = useNavigate()

  return (
    <div class="w-[150px] lg:w-[250px] rounded-lg shadow text-white bg-gray-600 border-gray-500">
        <div class="flex flex-col items-center py-4">
            <img class="h-[150px] w-[150px] mb-3 shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
            <h5 class="mb-1 text-xl font-medium text-white">{video.name}</h5>
            <div class="flex mt-4 md:mt-6">
                <button onClick={()=>{navigate(`/video?VideoId=${video.id}`)}} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none bg-red-600 hover:bg-red-700 focus:ring-red-800">Play</button>
                {/* <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete</a> */}
            </div>
        </div>
    </div>

  )
}

export default VideoCard