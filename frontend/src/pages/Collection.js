import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import CollectionCard from '../components/CollectionCard';
import axios from 'axios';



const Collection = () => {

  const [searchParams] = useSearchParams();
  const collectionName = searchParams.get("collectionName");
  const collectionId = searchParams.get("collectionId");

  
  const [subcollections, setSubcollections] = useState([])

    const callApi = async()=>{
        try{
        console.log("calling api now")
        
        axios.get(`https://cms-usry.onrender.com/api/subcollections?parentCollectionId=${collectionId}`)
        .then((response)=>{
            const obj = response.data
            console.log(obj)
            setSubcollections(obj.subcollections)
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
                <h3 className='text-xl'>Subcollections Under {collectionName??'this collection'}</h3>
                <div className=' w-[80%] mx-auto flex flex-wrap items-center justify-center mt-8 gap-5'>
                    {
                        subcollections?.map((subcollection)=>(
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