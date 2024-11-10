import express from 'express'
import protectRoute from '../middleware/ProtectRoute.js'
import { getMessages, sendMessage } from '../controller/MessageController.js'

const router = express.Router()

router.get("/:id", protectRoute, getMessages)
router.post("/send/:id", protectRoute, sendMessage)

export default router
