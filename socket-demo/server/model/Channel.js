import mongoose from "mongoose";

const Channel = new mongoose.Schema(
	{
		classroomName: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Classroom"
		},
		channelName: {
			type: String,
			required: true,
		},
		// channelType: {
		// 	type: String,
		// 	required: true,
		// },
		messages: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Message",
				default: [],
			},
		],
	},
	{ timestamps: true }
);

export const channel = mongoose.model("Channel", Channel);