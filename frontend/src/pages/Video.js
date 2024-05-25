import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const serverLocation = 'http://localhost:4567'

function Video() {

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("videoId");

    const [video, setVideo] = useState([])
  
    const callApi = async()=>{
        try{
        console.log("calling api now")
        
        axios.get(`http://localhost:4567/api/video?videoId=${videoId}`)
        .then((response)=>{
            const obj = response.data
            console.log(obj)
            setVideo(obj.video)
        })
        } catch(error){
        console.log(error.response)
        }
    }

    useEffect(()=>{callApi()}, [])

  return (
    <div className='w-full mt-10 flex justify-center items-center'>       
        {/* <video className="w-full max-w-[700px]"  controls>
        <source src={`${serverLocation}/${video?.url}`} type="video/mp4"/>
        Your browser does not support the video tag.
        </video> */}
        <video className='w-full max-w-[700px]' src={`${serverLocation}/${video?.url}`} type='video/mp4' controls autoPlay/>
    </div>
  )
}

export default Video