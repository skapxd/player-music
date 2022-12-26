import { ReqGetPlayList, RespGetPlayList } from './types'

export const getPlaylistService = async (props: ReqGetPlayList): Promise<RespGetPlayList> => {
  const { list } = props ?? {}

  const requestOptions = {
    method: 'GET'
  }

  const url = new URL(`${location.origin}/api/playlist`)
  url.search = new URLSearchParams({
    list
  }).toString()

  const resp = await fetch(url.toString(), requestOptions)

  if (resp.status >= 400) throw new Error('Status >= 400')

  const json: RespGetPlayList = await resp.json()

  return json
}
