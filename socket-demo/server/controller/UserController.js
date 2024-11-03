import { User } from "../model/UserModel.js";
import mongoose from "mongoose";

export const getUserDetails = async (req, res) => {
	try {
		const senderId = req.body.senderId
		//const senderId = req.user._id
		//console.log(senderId)
		//const objectId = new mongoose.Types.ObjectId(senderId)
		const userDetails = await User.findById(senderId).select("-password")
		res.status(200).json(userDetails)
	} catch (error) {
		console.error("Error in getUserDetails: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getUserStatus = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;
		// const userStatus = await User.findOne({ _id: { $ne: loggedInUserId } }).select("status");
		const userStatus = await User.findById(loggedInUserId)
		res.status(200).json(userStatus.status);
	} catch (error) {
		console.error("Error in getUserStatus: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}