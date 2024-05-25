const express = require('express')

const app = express()
const PORT = 4567
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.use(express.static(__dirname + '/public'));

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error)
    }
);


const {collections, subcollections, videos} = require('./data')

app.get('/api/collections', (req, res)=>{
    res.json({collections: collections})
})

app.get('/api/subcollections',(req, res)=>{
    const parentId = req.query.parentCollectionId
    const filteredSubcollections = subcollections.filter((subcollection)=>{
        return subcollection.ParentCollectionId === parentId
    })
    res.json({subcollections: filteredSubcollections})
})

app.get('/api/videos', (req, res)=>{
    const parentId = req.query.parentSubcollectionId
    const filteredVideos = videos.filter((video)=>{
        return video.ParentSubcollectionId === parentId
    })
    res.json({videos : filteredVideos})
})

app.get('/api/video', (req, res)=>{
    const videoId = req.query.videoId
    console.log(videoId)
    const video = videos.filter((video)=>{
        return video.id === videoId
    })
    console.log(video[0])
    res.json({video : video[0]})
})