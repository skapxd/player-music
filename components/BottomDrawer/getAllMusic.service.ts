import { RespGetAllMusic } from './types'

export const getAllMusicService = async (id: string): Promise<RespGetAllMusic> => {
  const url = new URL(location.origin + '/api/playlist/musics-from-playlist')
  url.search = new URLSearchParams({ id }).toString()

  const requestOptions = {
    method: 'GET'
  }

  const resp = await fetch(url.toString(), requestOptions)

  if (resp.status >= 400) throw new Error('Bad response from server')

  const json = await resp.json()

  return json
}
