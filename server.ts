import { socketHandle } from "react-query-external-dash"

const socketPort = parseInt(process.env.SOCKET_PORT || "3030")
const corsOrigins = (process.env.CORS_ORIGINS || "").split(",")
const dtPort = parseInt(process.env.DT_PORT || "3006")

import("socket.io").then(socketIO => {
    const io = new socketIO.Server(socketPort, {
        cors: {
            origin: [`http://localhost:${dtPort}`, ...corsOrigins],
            credentials: true,
        },
    })

    console.log('Starting socket on', socketPort)

    socketHandle({ io })

    io.on("connection", client => {
        console.log(`'${client.handshake.query.username}' connected`)
    })
})