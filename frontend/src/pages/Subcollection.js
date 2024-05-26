import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import axios from 'axios';

const Subcollection = () => {

    const [searchParams] = useSearchParams();
    const subcollectionName = searchParams.get("subcollectionName");

    const subcollectionId = searchParams.get("subcollectionId");

    const [selectedFile, setSelectedFile] = useState(null);
  
    const [videos, setVideos] = useState([])
  
      const callApi = async()=>{
          try{
          console.log("calling api now")
          
          axios.get(`${process.env.REACT_APP_SERVER_LOCATION}/api/videos?parentSubcollectionId=${subcollectionId}`)
          .then((response)=>{
              const obj = response.data
              console.log(obj)
              setVideos(obj.videos)
          })
          } catch(error){
          console.log(error.response)
          }
      }

      const onFileChange = (event)=>{
        setSelectedFile(event.target.files[0]);
      }

      const onFileUpload = ()=>{
        const formData = new FormData();
        formData.append("myFile", selectedFile, selectedFile.name);
    
        console.log(selectedFile);
    
        axios.post(`${process.env.REACT_APP_SERVER_LOCATION}/api/upload`, formData)
        .then(()=>{
            axios.post(`${process.env.REACT_APP_SERVER_LOCATION}/api/updateDatabase`, {name: selectedFile?.name, parentSubcollectionId: subcollectionId})
        });
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
                    {/* <input type="file" onClick={()=>{addVideo()}} className="py-6 px-10 rounded-full bg-gray-400 font-bold text-7xl flex items-center justify-center text-gray-600 cursor-pointer mb-8 md:mb-0"></input> */}
                   <div>
                     <input type="file" onChange={onFileChange} className='rounded-lg' />
                     <button onClick={onFileUpload} className='bg-gray-200 text-black rounded-lg p-1'>Upload!</button>
                     {
                    selectedFile? 
                        <div>
                        <h2>File Details:</h2>
                        <p>File Name: {selectedFile.name}</p>
                        <p>File Type: {selectedFile.type}</p>
                        </div>
                    :
                        <div>
                        <br />
                        <h4 className='font-semibold'>Upload your own files!</h4>
                        </div>
                    }
                  </div>
                </div>
            </section>

        </div>
  )
}

export default Subcollection