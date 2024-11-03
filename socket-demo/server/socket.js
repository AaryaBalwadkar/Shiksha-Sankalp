import express from 'express'
import http, { createServer } from 'http'
import { Server } from 'socket.io'
import Message from './model/Message.js'

const app = express()

const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    console.log(`a user connected: ${socket.id}`)

    socket.on('join_channel', ({ channelId }) => {
        socket.join(channelId)
        console.log('channel joined', channelId)
    })

    const changeStream = Message.watch();

    changeStream.on('change', (change) => {
        if (change.operationType === 'insert') {
            const newDocument = change.fullDocument;
            io.to(newDocument.channelId).emit('newEntry', newDocument);
            console.log('New entry emitted:', newDocument);
        }
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`)
    })
})


export { app, server, io }