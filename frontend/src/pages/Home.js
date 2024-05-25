import React from 'react'
import CollectionCard from '../components/CollectionCard';

const data = {
    collections: [
      {
        id: 'animals',
        name: 'Animals',
        subcollections: [
          {
            id: 'mammals',
            name: 'Mammals',
            videos: [{
                id: '1',
                name: 'video1',
                url: '/videos/video1.mp4'
                }]
          },
          {
            id: 'birds',
            name: 'Birds',
            videos: []
          }
        ]
      },
      {
        id: 'animals2',
        name: 'Animals2',
        subcollections: [
          {
            id: 'mammals',
            name: 'Mammals',
            videos: []
          },
          {
            id: 'birds',
            name: 'Birds',
            videos: []
          }
        ]
      },
      {
        id: 'countries',
        name: 'Countries',
        subcollections: [
          {
            id: 'asia',
            name: 'Asia',
            videos: []
          }
        ]
      }
    ]
  };
  

const Home = () => {
  return (
    <>
        <div className='bg-gray-900 flex flex-col text-center text-white items-center min-h-screen'>
            <section className='mt-10  w-full'>
                <h3 className='text-xl'>Collections</h3>
                <div className=' w-[80%] mx-auto flex flex-wrap items-center justify-center mt-8 gap-5'>
                    {
                        data?.collections?.map((collection)=>(
                            <CollectionCard key={collection.id} collection={collection}/>
                        ))
                    }
                </div>
            </section>

        </div>
    </>
  )
}

export default Home