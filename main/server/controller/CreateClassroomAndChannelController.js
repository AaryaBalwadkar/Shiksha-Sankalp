import { classroom } from "../model/Classroom.js";
import { channel } from "../model/Channel.js";
import { User } from "../model/UserModel.js";
import { ObjectId } from "mongodb";
import { useParams } from "react-router-dom";

export const createClassroom = async (req, res) => {
    // const {classroomName, imageUrl} = req.body
	const {classroomName} = req.body
    const whoCreated = req.user._id
	console.log(whoCreated)
	
    try {
        if (!classroomName) {
			throw new Error("Classroom name is required");
		}
		// if (!imageUrl) {
		// 	throw new Error("Classroom Image is required");
		// }

		const userClassroomNames = await User.findOne({
			_id: whoCreated,
		}).populate("classrooms"); // NOT REFERENCE BUT ACTUAL MESSAGES

		const names = userClassroomNames.classrooms.map((classroom) => (classroom.classroomName));
		const isClassroomAlreadyExists = names.includes(classroomName)
		console.log(names)
		if(isClassroomAlreadyExists){
			console.log("classroomAlreadyExists", isClassroomAlreadyExists);
			return res.status(400).json({message: "Classroom already exists" });
		}
        // const classroomAlreadyExists = await userClassroomNames.findOne({ classroomName });
		// console.log("classroomAlreadyExists", classroomAlreadyExists);
        // if (classroomAlreadyExists) {
		// 	return res.status(400).json({message: "Classroom already exists" });
		// }

        const newClassroom = new classroom({
            whoCreated,
			classroomName,
			// imageUrl,
			participants: whoCreated
		});

		const newid = newClassroom._id
        await newClassroom.save();

		const filter = { _id: new ObjectId(whoCreated) }
		const updateUser = await User.updateOne(
			filter,
			{$addToSet: {classrooms: newid}}
		)

        res.status(201).json({
			message: "Classroom created successfully",
			newClassroom: {
				...newClassroom._doc,
			},
		});

    } catch (error) {
        console.log("Error in CreateClassroomController: ", error.message)
        res.status(500).json({ error: "Internal server error"})
    }
}

export const createChannel = async (req, res) => {
    const {classroomName, channelName} = req.body
	const user = req.user._id
    try {
        if (!channelName || !classroomName) {
            throw new Error("Classroom and Channel name are required.");
        }

        // Step 1: Find all classrooms with the given name
        const classrooms = await classroom.find({ classroomName });

        if (classrooms.length === 0) {
            return res.status(404).json({ error: "No classrooms found." });
        }

        // Step 2: Find the classroom where the user is a participant
        const matchingClassroom = classrooms.find((cls) =>
            cls.participants.includes(user)
        );

        if (!matchingClassroom) {
            return res.status(404).json({ error: "User is not a participant in any matching classroom." });
        }
		const id = matchingClassroom._id

        const channelAlreadyExists = await channel.findOne({ classroomName: id, channelName });
        if (channelAlreadyExists) {
			return res.status(400).json({message: "Channel already exists" });
		}

        const newChannel = new channel({
			classroomName: id,
			channelName,
		});

        await newChannel.save();
	
		const newChannelID = newChannel._id
		console.log(newChannelID)
		const filter = { _id: new ObjectId(newChannelID) }
		const updateClassroom = await classroom.updateOne(
			filter,
			{$set: {channels: newChannelID}}
		)


        res.status(201).json({
			message: "Classroom created successfully",
			newChannel: {
				...newChannel._doc,
			},
		});

    } catch (error) {
        console.log("Error in CreateChannelController: ", error.message)
        res.status(500).json({ error: "Internal server error"})
    }
}

export const getClassrooms = async (req, res) => {
	try {
		const userId = req.user._id;
		
		const userClassroomNames = await User.findOne({
			_id: userId,
		}).populate("classrooms"); // NOT REFERENCE BUT ACTUAL MESSAGES

		if (!userClassroomNames) return res.status(200).json([]);
		// console.log(userClassroomNames)

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
		console.log(id)
		const channels = await channel.find({ classroomName: id })
		const channelNames = channels.map((channel) => (channel.channelName))

		if (!channelNames) return res.status(200).json([]);

		console.log(channelNames)
		res.status(200).json(channelNames)
	} catch (error) {
		console.log("Error in getClassrooms controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};