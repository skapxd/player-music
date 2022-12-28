import * as ytMusic from 'node-youtube-music'

export async function getCriteria (string: string) {
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
