// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as ytMusic from 'node-youtube-music'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { list } = req.query

    if (typeof list !== 'string') throw new Error('List debería ser un string')

    const idPlayer = await ytMusic.searchPlaylists(list)

    if (!idPlayer[0].playlistId) throw new Error('idPlayer debería ser un string')

    const resp = await ytMusic.listMusicsFromPlaylist(idPlayer[0].playlistId)

    res.status(200).json(resp)
  } catch (error) {
    // @ts-ignore
    res.status(400).json({ error: error.message })
  }
}
