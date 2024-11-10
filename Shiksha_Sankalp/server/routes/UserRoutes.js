import express from "express";
import protectRoute from "../middleware/ProtectRoute.js";
import { getUserDetails } from "../controller/UserController.js";

const router = express.Router();

router.post("/details",protectRoute,getUserDetails)
router.get("/check",protectRoute)

export default router;