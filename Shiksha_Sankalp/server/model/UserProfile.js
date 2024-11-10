import mongoose from "mongoose";

const userProfile = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			unique: true,
		},
		userId: {
			type: String,
			required: true,
			unique: true,
		},
		status: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
			default: email,
		},
		servers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Server",
			}
		],
		members: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Member",
			}
		],
		channels: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Channel",
			}
		],
	},
	{ timestamps: true }
);

export const profile = mongoose.model("Profile", userProfile);