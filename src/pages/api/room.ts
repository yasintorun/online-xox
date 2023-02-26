// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Room } from '@/models/Room'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const roomPath = path.join(process.cwd(), 'data', 'rooms.json')

    const rooms = await fs.promises.readFile(roomPath, 'utf-8')
    const parsedRooms = JSON.parse(rooms) as Room[]

    if (req.method === "GET") {
        res.status(200).json(parsedRooms)
    }
    else if (req.method === "POST") {
        const room = req.body as Room

        room.id = Math.random().toString(36).substring(2, 9)
        room.points = Array(9).fill(0)

        parsedRooms.push(room)

        await fs.promises.writeFile(roomPath, JSON.stringify(parsedRooms))

        res.status(200);
    }
}
