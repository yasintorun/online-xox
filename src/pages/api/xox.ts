// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiResponseServerIO } from '@/type'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  if (req.method === "POST") {
    const {points} = req.body
    res.socket.server.io.emit('points', points)
    res.status(200).json({ points })
  }
}
