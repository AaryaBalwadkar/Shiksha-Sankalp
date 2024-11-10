import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import AuthRoutes from './routes/AuthRoutes.js'
import MessageRoutes from './routes/MessageRoutes.js'
import UserRoutes from './routes/UserRoutes.js'
import ClassroomAndChannelRoutes from './routes/ClassroomAndChennelRoutes.js'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import { app, server } from './socket.js'

dotenv.config()

//const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: "http://localhost:5173", credentials: true }))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", AuthRoutes)
app.use("/api/messages", MessageRoutes)
app.use("/api/user", UserRoutes)
app.use("/api/classroom", ClassroomAndChannelRoutes)

server.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})

const databaseURL = process.env.MONGO_URI
mongoose.connect(databaseURL).then(()=>console.log("DB Connection Successful")).catch(err=>console.log(err.message))
// KQRruPECGZbZ99ne