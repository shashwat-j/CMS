import React from 'react'
import { useSearchParams } from 'react-router-dom';
import CollectionCard from '../components/CollectionCard';



const Collection = () => {

  const [searchParams] = useSearchParams();
  const collectionName = searchParams.get("collectionName");

  //fetch that collection from backend
  const collection = {
    id: 'animals',
    name: 'Animals',
    subcollections: [
      {
        id: 'mammals',
        name: 'Mammals',
        videos: ['video1.mp4', 'video2.mp4']
      },
      {
        id: 'birds',
        name: 'Birds',
        videos: ['video3.mp4', 'video4.mp4']
      }
    ]
  }

  return (
    <>
        <div className='bg-gray-900 flex flex-col text-center text-white items-center min-h-screen'>
            <section className='mt-10  w-full'>
                <h3 className='text-xl'>Subcollections</h3>
                <div className=' w-[80%] mx-auto flex flex-wrap items-center justify-center mt-8 gap-5'>
                    {
                        collection?.subcollections?.map((subcollection)=>(
                            <CollectionCard key={subcollection.id} subcollection={subcollection}/>
                        ))
                    }
                </div>
            </section>

        </div>
    </>
  )
}

export default Collection