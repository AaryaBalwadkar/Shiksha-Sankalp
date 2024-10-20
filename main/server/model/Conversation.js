// import mongoose from "mongoose";

// const Channel = new mongoose.Schema(
// 	{
// 		name: {
// 			type: String,
// 			required: true,
// 		},
// 		id: {
// 			type: mongoose.Schema.Types.ObjectId,,
// 			required: true,
// 			unique: true,
// 		},
//         profileId: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Profile",
//         },
//         serverId: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Server",
//         }
// 	},
// 	{ timestamps: true }
// );

// export const channel = mongoose.model("Channel",Channel);

import mongoose from "mongoose";

const Conversation = new mongoose.Schema(
	{
		channelName: {
			type: String,
			required: true,
		},
		// channelType: {
		// 	type: String,
		// 	required: true,
		// },
		participants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
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

const conversation = mongoose.model("Conversation", Conversation);

export default conversation;