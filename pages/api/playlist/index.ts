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

    const { listMusic, type } = await getCriteria(list)

    return res.status(200).json({
      type,
      list: listMusic
    })
  } catch (error) {
    // @ts-expect-error
    res.status(400).json({ error: error.message })
  }
}

async function getCriteria (string: string) {
  try {
    const urlDecoded = decodeURIComponent(string)
    const url = new URL(urlDecoded)
    const list = url.searchParams.get('list')
    if (list === null) throw new Error('')

    const listMusic = await ytMusic.searchPlaylists(list) ?? []

    return {
      type: 'MusicsFromPlaylist',
      listMusic
    }
  } catch (error) {
    const listMusic = await ytMusic.searchMusics(string) ?? []

    return {
      type: 'listOfMusic',
      listMusic
    }
  }
}
