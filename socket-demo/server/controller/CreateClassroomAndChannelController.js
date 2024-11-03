import { classroom } from "../model/Classroom.js";
import { channel } from "../model/Channel.js";
import { User } from "../model/UserModel.js";
import { ObjectId } from "mongodb";

export const createClassroom = async (req, res) => {
	const {classroomName, image} = req.body
    const whoCreated = req.user._id
	
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
		if(isClassroomAlreadyExists){
			console.log("classroomAlreadyExists", isClassroomAlreadyExists);
			return res.status(400).json({message: "Classroom already exists" });
		}

        const newClassroom = new classroom({
            whoCreated,
			classroomName,
			imageUrl: image,
			participants: whoCreated
		});
		
		await newClassroom.save();

		const newid = newClassroom._id
		const updateUser = await User.findByIdAndUpdate(
			whoCreated,
			{$push: {classrooms: newid}}
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

        const classrooms = await classroom.find({ classroomName });

        if (classrooms.length === 0) {
            return res.status(404).json({ error: "No classrooms found." });
        }

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
		// const filter = { _id: new ObjectId(newChannelID) }
		// const updateClassroom = await classroom.updateOne(
		// 	filter,
		// 	{$push: {channels: newChannelID}}
		// )

		const updateClassroom = await User.findByIdAndUpdate(
			id,
			{$push: {channels: newChannelID}}
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