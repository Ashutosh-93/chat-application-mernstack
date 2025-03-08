import dotenv from 'dotenv'
dotenv.config()

import express from "express"
import cors from "cors"

// import files 
import dbConnect from "./config/db_connection.js"

const app = express()
const port = process.env.PORT || 6070

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: '*',      //recive requiest from every soucess
    credentials: true
}))

// routes 
app.get('/demo', (req, res) => {
    try {
        res.send("app working !!")
    } catch (error) {
        console.log(error);
        throw new Error("/demo get fail")
    }
})

app.listen(port, async () => {
    await dbConnect()
    console.log(`app listen on port : ${port}`);
})