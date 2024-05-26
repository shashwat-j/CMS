const express = require('express')
const path = require("path");
const multer = require("multer");
const fs = require('fs')

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


const {collections, subcollections} = require('./data')
const videos = require('./videos.json')

app.get('/api/collections', (req, res)=>{
    res.json({collections: collections})
})

app.get('/api/subcollections',(req, res)=>{
    const parentId = req.query.parentCollectionId
    const filteredSubcollections = subcollections.filter((subcollection)=>{
        return subcollection.ParentCollectionId === parentId
    })

    const orphanVideos = videos.filter((video)=>{
        return video.ParentSubcollectionId === '0' && video.ParentCollectionId === parentId
    })
    res.json({subcollections: filteredSubcollections, videos: orphanVideos})
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


// var upload = multer({ dest: "userUploads/" })
const maxSize = 5 * 1000 * 1000;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

// filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now() + ".mp4");
// },


var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        var filetypes = /mp4/;
        var mimetype = filetypes.test(file.mimetype);
 
        var extname = filetypes.test(
            path.extname(file.originalname).toLowerCase()
        );
 
        if (mimetype && extname) {
            return cb(null, true);
        }
 
        cb(
            "Error: we only support mp4"
        );
    },
 
}).single("myFile");

app.post("/api/upload", (req, res, next) => {
    
    upload(req, res, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("done");
        }
    });
});

// app.post('/api/upload', upload.single('myFile'), (req, res) => {
//     try {
//       res.send(req.file);
//     }catch(err) {
//       res.send(400);
//     }
//   });

app.post('/api/updateDatabase', (req, res)=>{

    const id = (videos.length + 1).toString()

    const obj =  {
        id: id,
        ParentSubcollectionId: req.body.parentSubcollectionId,
        name: req.body.name,
        img: 'country3.jpg',
        url: req.body.name
    }
    
    console.log(obj)

    videos.push(obj)

    fs.writeFileSync('./videos.json', JSON.stringify(videos))


})