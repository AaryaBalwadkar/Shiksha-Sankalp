import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connect } from 'mongoose'
import { login, logout, signup } from './controller/AuthController.js'
import AuthRoutes from './routes/AuthRoutes.js'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors({ origin: "http://localhost:5173", credentials: true }))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", AuthRoutes)

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})

const databaseURL = process.env.MONGO_URI
mongoose.connect(databaseURL).then(()=>console.log("DB Connection Successful")).catch(err=>console.log(err.message))
// KQRruPECGZbZ99ne