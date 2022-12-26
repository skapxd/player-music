// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as ytMusic from 'node-youtube-music'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Envs } from '#/env'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query

    if (typeof id !== 'string') throw new Error('id debería ser un string')

    const [detailMusic] = await ytMusic.searchMusics(id)

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': Envs.rapidApiKey,
        'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
      }
    }

    const url = new URL('https://youtube-music1.p.rapidapi.com/get_download_url')
    url.searchParams.set('id', id)
    url.searchParams.set('ext', 'mp3')

    const urlDownload = await fetch(url.toString(), options)
      .then(async resp => await resp.json())
      .then(json => json.result.download_url)

    res.status(200).json({
      urlDownload,
      ...detailMusic
    })
  } catch (error) {
    // @ts-expect-error
    res.status(400).json({ error: error.message })
  }
}
