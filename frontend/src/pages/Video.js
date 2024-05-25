import React from 'react'
import { useSearchParams } from 'react-router-dom';

function Video() {

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("videoId");

    const video = {
            id: '1',
            name: 'video1',
            url: '/videos/video1.mp4'
            }

  return (
    <div className='w-full mt-10 flex justify-center items-center'>       
        <video class="w-full max-w-[700px]" autoplay controls>
        <source src={video.url} type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default Video