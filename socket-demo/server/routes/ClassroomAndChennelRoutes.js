import express from "express";
import protectRoute from "../middleware/ProtectRoute.js";
import { createChannel, createClassroom, getClassrooms, getChannels, joinClassroom, deleteClassroom, removeClassroom, deleteChannel } from "../controller/ClassroomAndChannelController.js";

const router = express.Router();

router.post("/newclassroom", protectRoute, createClassroom);
router.post("/newchannel", protectRoute, createChannel);
router.post("/joinclassroom", protectRoute, joinClassroom);
router.post("/deleteclassroom", protectRoute, deleteClassroom);
router.post("/deletechannel", protectRoute, deleteChannel);
router.post("/removeclassroom", protectRoute, removeClassroom);

router.get("/classrooms", protectRoute, getClassrooms);
router.get(`/:id`, protectRoute, getChannels);

export default router;