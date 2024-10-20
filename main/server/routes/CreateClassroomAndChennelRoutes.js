import express from "express";
import protectRoute from "../middleware/ProtectRoute.js";
import { createChannel, createClassroom, getClassrooms, getChannels } from "../controller/CreateClassroomAndChannelController.js";

const router = express.Router();

router.post("/newclassroom", protectRoute, createClassroom);
router.post("/newchannel", protectRoute, createChannel);

router.get("/classrooms", protectRoute, getClassrooms);
router.get(`/:id`, protectRoute, getChannels);

export default router;