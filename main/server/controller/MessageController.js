import Conversation from "../model/Conversation.js"
import Message from "../model/Message.js"

export const sendMessage = async (req, res) => {
    try {
        const {message, channelName} = req.body
        // console.log("Message : ",message)
        // console.log("channelName : ",channelName)
        const {id: receiverId} = req.params
        const senderId = req.user._id
        // console.log(req.user._id)

        let conversation = await Conversation.findOne({
            channelName: channelName,
            participants: { $all: [senderId, receiverId]},
        })

        if(!conversation){
            conversation = await Conversation.create({
                channelName: channelName,
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        // await conversation.save()
        // await newMessage.save()

        // This will run in parallel
        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message)
        res.status(500).json({ error: "Internal server error"})
    }
}

export const sendMessageInClassroom = async (req, res) => {
    try {
        const {message, channelName} = req.body
        // console.log("Message : ",message)
        // console.log("channelName : ",channelName)
        const {id: channelId} = req.params
        const senderId = req.user._id
        // console.log(req.user._id)

        let conversation = await channel.findOne({
            channelName: channelName,
            participants: { $all: [senderId, receiverId]},
        })

        if(!conversation){
            conversation = await channel.create({
                channelName: channelName,
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        // await conversation.save()
        // await newMessage.save()

        // This will run in parallel
        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message)
        res.status(500).json({ error: "Internal server error"})
    }
}

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;

        // const conversation = await Conversation.find({}).populate("messages")
		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

		if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};