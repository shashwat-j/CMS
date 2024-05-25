import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import axios from 'axios';

const Subcollection = () => {

    const [searchParams] = useSearchParams();
    const subcollectionName = searchParams.get("subcollectionName");

    const subcollectionId = searchParams.get("subcollectionId");

  
    const [videos, setVideos] = useState([])
  
      const callApi = async()=>{
          try{
          console.log("calling api now")
          
          axios.get(`http://localhost:4567/api/videos?parentSubcollectionId=${subcollectionId}`)
          .then((response)=>{
              const obj = response.data
              console.log(obj)
              setVideos(obj.videos)
          })
          } catch(error){
          console.log(error.response)
          }
      }
  
      useEffect(()=>{callApi()}, [])

  return (
    <div className='bg-gray-900 flex flex-col text-center text-white items-center min-h-screen'>
            <section className='mt-10  w-full'>
                <h3 className='text-xl'>Videos Under {subcollectionName??'this subcollection'}</h3>
                <div className=' w-[80%] mx-auto flex flex-wrap items-center justify-center mt-8 gap-5'>
                    {
                        videos?.map((video)=>(
                            <VideoCard key={video.id} video={video}/>
                        ))
                    }
                </div>
            </section>

        </div>
  )
}

export default Subcollection