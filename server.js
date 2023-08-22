// import cors from 'cors'
import express from "express";
const app = express()
import dotenv from 'dotenv'
dotenv.config()

import 'express-async-errors'

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';


import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import cookieParser from "cookie-parser";
//connect to db
import connectDB from "./db/connect.js";

//routes 
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'


// Middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleWare from "./middleware/error-handler.js";

import authenticatedUser from "./middleware/auth.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/build')))

// app.use(cors())
app.use(express.json())
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(cookieParser())

app.get('/', (req , res)=>{
    // throw new Error('error')
    res.send("Welcome :)")
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs',authenticatedUser, jobsRouter)

app.get('*', (req, res) => {
 res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleWare)



const port = process.env.PORT || 5000
const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log (`Server is running on port ${port}`)})
    }catch (error) {
        console.log(error)
    }
}
start()