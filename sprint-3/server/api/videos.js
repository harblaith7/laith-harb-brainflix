const express = require('express')
const fs = require('fs')
const router = express.Router()
const path = require('path')
const videos = require('../data.json')
const uuid = require('uuid')



//fs.writeFileSync('./data.json', JSON.stringify(videos))

router.get('/', (req, res) => {
    res.send(videos)
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    const found = videos.some(video => video.id === req.params.id)

    if(found){
        res.json(videos.filter(video => video.id === req.params.id))
    } else {
        res.status(400).json({msg: `No video with the id of ${req.params.id}`})
    }
})

/*
router.post('/:id/comments', (req, res) => {
    const found = videos.some(video => video.id === req.params.id)
    const {body} = req

    if(found){
        let videos = videos.map(video => {
            if(video.id === req.param.id){
                video.comments.push({
                    comment: body.comment,
                    userName: "Laith Harden",
                    id: uuid.v4()
                })
            }
            res.status(201).json(videos)
        })
    } else {
        res.status(400).json({msg: `No video with the id of ${req.params.id}`})
    }
})

*/

router.post('/:id/comments', (req, res) => {
    console.log('Running')
    console.log(req.body)
})

router.post('/upload', (req, res) => {
    
    const {body} = req;

    console.log(body)

    const newVideo = {
        ...body,
        id: uuid.v4(),
        channel: "Laith Harden",
        image: "https://i.imgur.com/wpb4SD9.jpg",
        views: "0",
        likes: "0",
        duration: "3:48",
        video: "BrainStation Sample Video.mp4",
        timestamp: Date.now(),
        comments : [
            {
              name: "Micheal Lyons",
              comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
              id: "96fc0e2c-2b50-4ae7-b30a-0a40dff042b7",
              likes: 0,
              timestamp: 1560744338878
            },
            {
              name: "Gary Wong",
              comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
              id: "6584635b-8724-47d9-911e-a0024c456889",
              likes: 0,
              timestamp: 1530744337678
            },
            {
              name: "Theodore Duncan",
              comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
              id: "495b0a55-934a-44fc-a61d-bbef04440690",
              likes: 0,
              timestamp: 1530384138768
            }
          ]
    }

    videos.push(newVideo)

    console.log(req)
    res.status(201).json(newVideo)

    
})



module.exports = router