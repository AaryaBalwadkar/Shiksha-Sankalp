import { classroom } from "../model/Classroom.js";
import { channel } from "../model/Channel.js";
import { User } from "../model/UserModel.js";
import Message from "../model/Message.js";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import conversation from "../model/Conversation.js";

export const createClassroom = async (req, res) => {
	const { classroomName, image } = req.body
	const whoCreated = req.user._id

	const classroomCode = Math.floor(100000 + Math.random() * 900000).toString();

	try {
		if (!classroomName) {
			throw new Error("Classroom name is required");
		}
		if (!image) {
			throw new Error("Classroom Image is required");
		}

		const userClassroomNames = await User.findOne({
			_id: whoCreated,
		}).populate("classrooms"); // NOT REFERENCE BUT ACTUAL MESSAGES
		const names = userClassroomNames.classrooms.map((classroom) => (classroom.classroomName));
		console.log(names)
		const isClassroomAlreadyExists = names.includes(classroomName)
		if (isClassroomAlreadyExists) {
			console.log("classroomAlreadyExists", isClassroomAlreadyExists);
			return res.status(400).json({ message: "Classroom already exists" });
		}

		const newClassroom = new classroom({
			whoCreated,
			classroomName,
			classroomCode,
			imageUrl: image,
			participants: whoCreated
		});

		await newClassroom.save();

		const newid = newClassroom._id
		const updateUser = await User.findByIdAndUpdate(
			whoCreated,
			{ $push: { classrooms: newid } }
		)

		const channelName = "Announcements"
		const newChannel = new channel({
			classroomName: newid,
			channelName,
		});

		await newChannel.save();

		res.status(201).json({
			message: "Classroom created successfully",
			newClassroom: {
				...newClassroom._doc,
			},
			message: "Channel created successfully",
			newChannel: {
				...newChannel._doc,
			},
		});

	} catch (error) {
		console.log("Error in CreateClassroomController: ", error.message)
		res.status(500).json({ error: "Internal server error" })
	}
}

export const joinClassroom = async (req, res) => {
	const { code } = req.body
	const whojoined = req.user._id
	console.log(whojoined)

	//const id = new ObjectId(classroomId)

	try {
		if (!code) {
			throw new Error("Classroom name is required");
		}

		const userClassroomIds = await User.findOne({
			_id: whojoined,
		})

		const isClassroom = await classroom.findOne({
			classroomCode: code,
		})
		if (!isClassroom) {
			console.log("Classroom doesn't exist or Code is Invalid");
			return res.status(400).json({ message: "Classroom doesn't exists or Code is Invalid" });
		}

		const isClassroomAlreadyExists = userClassroomIds.classrooms.includes(isClassroom._id)

		if (isClassroomAlreadyExists) {
			console.log("classroomAlreadyExists", isClassroomAlreadyExists);
			return res.status(400).json({ message: "Classroom already exists" });
		}

		const updateUser = await User.findByIdAndUpdate(
			whojoined,
			{ $push: { classrooms: isClassroom._id } }
		)

		const updateClassroom = await classroom.findByIdAndUpdate(
			isClassroom._id,
			{ $push: { participants: whojoined } }
		)

		res.status(201).json({
			message: "Classroom joined successfully",
			updateUser: {
				...updateUser._doc,
			},
			updateClassroom: {
				...updateClassroom._doc,
			}
		});

	} catch (error) {
		console.log("Error in CreateClassroomController for joining classroom: ", error.message)
		res.status(500).json({ error: "Internal server error" })
	}
}

export const createChannel = async (req, res) => {
	const { classroomId, channelName, lock } = req.body
	const user = req.user._id
	console.log("classroomId", classroomId)
	try {
		if (!channelName || !classroomId) {
			throw new Error("Classroom Id and Channel name are required.");
		}

		const classrooms = await classroom.findById(classroomId);
		console.log("classrooms: ", classrooms)

		if (classrooms.length === 0) {
			return res.status(404).json({ error: "No classrooms found." });
		}

		const matchingClassroom = classrooms.participants.includes(user)

		if (!matchingClassroom) {
			return res.status(404).json({ error: "User is not a participant in any matching classroom." });
		}

		const channelAlreadyExists = await channel.findOne({ classroomName: classroomId, channelName });

		if (channelAlreadyExists) {
			return res.status(400).json({ message: "Channel already exists" });
		}

		const newChannel = new channel({
			classroomName: classroomId,
			channelName,
			lock,
		});

		await newChannel.save();

		res.status(201).json({
			message: "Classroom created successfully",
			newChannel: {
				...newChannel._doc,
			},
		});

	} catch (error) {
		console.log("Error in CreateChannelController: ", error.message)
		res.status(500).json({ error: "Internal server error" })
	}
}

export const getClassrooms = async (req, res) => {
	try {
		const userId = req.user._id;
		//console.log(userId)

		const userClassroomNames = await User.findOne({
			_id: userId,
		}).populate("classrooms"); // NOT REFERENCE BUT ACTUAL MESSAGES

		if (!userClassroomNames) return res.status(200).json([]);
		//console.log(userClassroomNames)

		const names = userClassroomNames.classrooms.map((classroom) => (classroom));
		res.status(200).json(names);
	} catch (error) {
		console.log("Error in getClassrooms controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getChannels = async (req, res) => {
	try {
		const userId = req.user._id; // User's ID from request (authenticated user)
		const { id } = req.params; // Classroom ID from request body

		const channels = await channel.find({ classroomName: id })
		const channelNames = channels.map((channel) => (channel))

		if (!channelNames) return res.status(200).json([]);

		res.status(200).json(channelNames)
	} catch (error) {
		console.log("Error in getClassrooms controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const deleteClassroom = async (req, res) => {
	const { classroomId } = req.body
	const user = req.user._id

	// const classroomCode = Math.floor(100000 + Math.random() * 900000).toString();

	try {
		if (!classroomId) {
			throw new Error("Classroom Id is required");
		}

		const findUser = await User.findById(user)
		const updateUser = await User.findOneAndUpdate(
			{ _id: user }, 
			{ $pull: { classrooms: new ObjectId(classroomId) } }
		);
		console.log(findUser)


		const findClassroomChannels = await channel.find({
			classroomName: classroomId
		})

		const channelIds = findClassroomChannels.map((ch) => (ch._id));

		const updateMessageModel = await Message.deleteMany({ receiverId: { $in: channelIds } });

		const updateConversationModel = await conversation.deleteMany({ channelId: { $in: channelIds } });

		const updateChannelModel = await channel.deleteMany({ _id: { $in: channelIds } });

		const deleteClassroom = await classroom.findByIdAndDelete(classroomId)

		res.status(200).json("Done")

	} catch (error) {
		console.log("Error in DeleteClassroomController: ", error.message)
		res.status(500).json({ error: "Internal server error" })
	}
}

export const deleteChannel = async (req, res) => {
	const { channelId } = req.body

	try {
		if (!channelId) {
			throw new Error("Classroom Id is required");
		}
		const findChannel = await channel.findById(channelId)

		if(findChannel.channelName == "Announcement")
		console.log(findChannel)

		// const findChannel = await channel.findById(channelId)

		// const updateMessageModel = await Message.deleteMany({ receiverId: { $in: findChannel } });

		// const updateConversationModel = await conversation.deleteMany({ channelId: { $in: findChannel } });

		// const updateChannelModel = await channel.deleteMany({ _id: { $in: channelId } });

		// res.status(200).json("Done")

	} catch (error) {
		console.log("Error in DeleteClassroomController: ", error.message)
		res.status(500).json({ error: "Internal server error" })
	}
}

export const removeClassroom = async (req, res) => {
	const { classroomId } = req.body
	console.log(classroomId)
	const user = req.user._id


	// const classroomCode = Math.floor(100000 + Math.random() * 900000).toString();

	try {
		if (!classroomId) {
			throw new Error("Classroom Id is required");
		}

		const findUser = await User.findById(user)
		const updateUser = await User.findOneAndUpdate(
			{ _id: user }, 
			{ $pull: { classrooms: new ObjectId(classroomId) } }
		);

		const updateClassroom = await classroom.findOneAndUpdate(
			{ _id: classroomId }, 
			{ $pull: { participants: user } }
		)

		res.status(200).json("Done")

	} catch (error) {
		console.log("Error in DeleteClassroomController: ", error.message)
		res.status(500).json({ error: "Internal server error" })
	}
}