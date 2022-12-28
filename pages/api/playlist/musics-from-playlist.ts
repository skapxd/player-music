// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as ytMusic from 'node-youtube-music'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query

    if (typeof id !== 'string') throw new Error('List debería ser un string')

    const listMusic = await ytMusic.listMusicsFromPlaylist(id)

    return res.status(200).json({
      list: listMusic
    })
  } catch (error) {
    res.status(400).json({ error: (error as Error).message })
  }
}
