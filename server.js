require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const artItemRoutes = require('./routes/artItems')

//express app
const app = express()

// Middleware
// cors: npm i cors
app.use(cors({
    origin: '*'
}));

app.use(express.json())
app.use((req,res, next)=> {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/items', artItemRoutes)

//Connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
        //listen for requests
        app.listen(process.env.PORT, () => {
        console.log('listening on port 4000')
    })
})
.catch((error)=>{
    console.log(error)
})


