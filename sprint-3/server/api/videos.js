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
        image: "data:image/jpeg;base64,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",
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