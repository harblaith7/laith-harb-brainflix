const express = require('express')
const path = require('path')

const app = express()

//app.use(express.json())
//app.use(express.urlencoded({extended: false}))


const middlewareTest = () => {
    console.log('I am a middleware')
}

app.get('/', (req, res) => {
    res.send('I am currently working')
})

app.use('/video', require('./api/videos'))
app.use(middlewareTest)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
