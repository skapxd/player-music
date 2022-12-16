// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as ytMusic from 'node-youtube-music'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query

    if (typeof id !== 'string') throw new Error('id debería ser un string')

    const resp = await ytMusic.searchMusics(id)

    res.status(200).json(resp)
  } catch (error) {
    // @ts-ignore
    res.status(400).json({ error: error.message })
  }
}
