import React from 'react'
import { useSearchParams } from 'react-router-dom';
import CollectionCard from '../components/VideoCard';
import VideoCard from '../components/VideoCard';

const Subcollection = () => {

    const [searchParams] = useSearchParams();
    const collectionName = searchParams.get("collectionName");

    const subcollection = {
        id: 'mammals',
        name: 'Mammals',
        videos: [{
            id: '1',
            name: 'video1',
            url: ''
            },
            {
            id: '2',
            name: 'video2',
            url: ''
            }]
      }

  return (
    <div className='bg-gray-900 flex flex-col text-center text-white items-center min-h-screen'>
            <section className='mt-10  w-full'>
                <h3 className='text-xl'>Videos</h3>
                <div className=' w-[80%] mx-auto flex flex-wrap items-center justify-center mt-8 gap-5'>
                    {
                        subcollection?.videos?.map((video)=>(
                            <VideoCard key={video.id} video={video}/>
                        ))
                    }
                </div>
            </section>

        </div>
  )
}

export default Subcollection