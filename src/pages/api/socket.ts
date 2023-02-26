import { NextApiResponseServerIO } from '@/type'
import { NextApiRequest, NextApiResponse } from 'next'
import { Server } from 'socket.io'
import { Server as NetServer } from "http";

const SocketHandler = (req: NextApiRequest, res: NextApiResponseServerIO) => {
    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        const httpServer: NetServer = res.socket.server as any;
        const io = new Server(httpServer, {
            path: "/api/socket"
        })
        res.socket.server.io = io
    }
    res.end()
}

export default SocketHandler