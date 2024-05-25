import React, { useEffect, useState } from 'react'
import CollectionCard from '../components/CollectionCard'  
import axios from 'axios'

const serverLocation = 'https://cms-usry.onrender.com'//or localhost 4567

const Home = () => {


    const [collections, setCollections] = useState([])

    const callApi = async()=>{
        try{
            console.log("calling api now")
        
        axios.get(`${serverLocation}/api/collections`)
        .then((response)=>{
            const obj = response.data
            console.log(obj)
            setCollections(obj.collections)
        })
        } catch(error){
        console.log(error.response)
        }
    }

    useEffect(()=>{callApi()}, [])
    
  return (
    <>
        <div className='bg-gray-900 flex flex-col text-center text-white items-center min-h-screen'>
            <section className='mt-10  w-full'>
                <h3 className='text-xl'>Collections</h3>
                <div className=' w-[80%] mx-auto flex flex-wrap items-center justify-center mt-8 gap-5'>
                    {
                        collections?.map((collection)=>(
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