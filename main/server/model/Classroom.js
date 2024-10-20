import mongoose from "mongoose";

const Classroom = new mongoose.Schema(
	{
		whoCreated: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		classroomName: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
		},
		inviteCode: {
			type: mongoose.Schema.Types.ObjectId,
		},
		channels: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Channel",
			},
		],
		participants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
	},
    { timestamps: true }
);

export const classroom = mongoose.model("Classroom", Classroom);