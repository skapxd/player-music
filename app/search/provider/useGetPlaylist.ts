import { getPlaylistService } from './getPlaylist.service';
import { useEffect, useState } from "react"
import { Music, ReqGetPlayList } from "./types"

export const useGetPlaylist = () => {
  let isActiveHook = true
  const [statePlayList, setStatePlayList] = useState({
    isLoading: true,
    playList: [] as Array<Music>
  })

  useEffect(() => {
    return () => {
      isActiveHook = false
    }
  }, [])


  const getPlayList = async (props: ReqGetPlayList) => {
    setStatePlayList(s => ({ ...s, isLoading: true }))

    try {
      const resp = await getPlaylistService(props)

      if (!isActiveHook) return 
      setStatePlayList({
        isLoading: false,
        playList: resp
      })
    } catch (error) {
      // @ts-ignore
      console.error("🚀 ~ Error Service: useGetPlaylist.ts:31 ~ getPlayList ~ error", error.message)
      
      setStatePlayList({
        isLoading: false,
        playList: []
      })
    }
  }

  return {
    statePlayList,
    getPlayList,
  }
}