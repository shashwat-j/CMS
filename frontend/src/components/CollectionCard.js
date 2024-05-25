import React from 'react'
import { useNavigate } from 'react-router-dom'

const serverLocation = 'https://cms-usry.onrender.com'

const CollectionCard = ({collection, subcollection}) => {

    const navigate = useNavigate()
    const item = subcollection?? collection

  return (
    <div className="w-[150px] lg:w-[250px] rounded-lg shadow text-white bg-gray-600 border-gray-500">
        <div className="flex flex-col items-center py-4">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`${serverLocation}/${item.img}`} alt="image"/>
            <h5 className="mb-1 text-xl font-medium text-white">{item.name}</h5>
            <div className="flex mt-4 md:mt-6">
                <button onClick={()=>{navigate(subcollection? `/subcollection?subcollectionId=${item.id}&subcollectionName=${item.name}` : `/collection?collectionId=${item.id}&collectionName=${item.name}`)}} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Open</button>
                {/* <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete</a> */}
            </div>
        </div>
    </div>

  )
}

export default CollectionCard