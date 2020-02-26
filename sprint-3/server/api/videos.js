const express = require('express')
const fs = require('fs')
const router = express.Router()
const path = require('path')

const videos = [
    {
        id: "1af0jruup5gu",
        title: "BMX Rampage: 2018 Highlights",
        channel: "Red Cow",
        image: "https://i.imgur.com/l2Xfgpl.jpg"
    },
    {
        id: "1ainjruutd1j",
        title: "Become A Travel Pro In One Easy Lesson",
        channel: "Todd Welch",
        image: "https://i.imgur.com/5qyCZrD.jpg"
    },
    {
        id: "1aivjruutn6a",
        title: "Les Houches The Hidden Gem Of The Chamonix",
        channel: "Cornelia Blair",
        image: "https://i.imgur.com/yFS8EBr.jpg"
    },
    {
        id: "1a3cjruucpf7",
        title: "Travel Health Useful Medical Information For",
        channel: "Glen Harper",
        image: "https://i.imgur.com/MMDMgD7.jpg"
    },
    {
        id: "1am3jruuwagz",
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: "https://i.imgur.com/ibLw5q5.jpg"
    },
    {
        id: "1akljruuvhzt",
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: "https://i.imgur.com/7rD6Mf6.jpg"
    },
    {
        id: "1ae5jruuoc4q",
        title: "Choose the Perfect Accommodations",
        channel: "Lydia Perez",
        image: "https://i.imgur.com/0hi3N4B.jpg"
    },
    {
        id: "1a4kjruuedd9",
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: "https://i.imgur.com/DDJNZNw.jpg"
    },
    {
        id: "1a8qhruuzky3",
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: "https://i.imgur.com/i6S8m7I.jpg"
    }
]

//fs.writeFileSync('./data.json', JSON.stringify(videos))

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../data.json'))
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



module.exports = router