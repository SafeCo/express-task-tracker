const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require("./db/connect")
const port = 3000
require("dotenv").config()

app.use(express.json())

app.get("/hello", (req, res)=>{
    res.send("hello Task Manger")
})

app.use('/api/v1/tasks', tasks)

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {console.log(`Example app listening on port ${port}`)})
    }catch(error){
        console.log(error)
    }
}

start()



