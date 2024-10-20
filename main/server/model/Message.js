// import mongoose from "mongoose";

// const Member = new mongoose.Schema(
// 	{
// 		role: {
// 			type: String,
// 			required: true,
// 			default: "student"
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

// export const member = mongoose.model("Member", Member);

import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
	{
		channelName: {
			type: String,
			// required: true,
		},
		senderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		receiverId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;