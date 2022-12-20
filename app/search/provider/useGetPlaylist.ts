import { getPlaylistService } from './getPlaylist.service';
import { useEffect, useState } from "react"
import { ReqGetPlayList, RespGetPlayList } from "./types"
import { useDebounce } from '#/utils/debounce/useDebounce';

export const useGetPlaylist = () => {
  let isActiveHook = true
  const [statePlayList, setStatePlayList] = useState({
    isLoading: false,
    playList: {} as null | RespGetPlayList
  })

  const debounce = useDebounce({
    delay: 700,
    // @ts-ignore
    fn: async (value) => {
      try {
        const resp = await getPlaylistService(value)

        if (!isActiveHook) return
        setStatePlayList({
          isLoading: false,
          // @ts-ignore
          playList: resp
        })

      } catch (error) {
        // @ts-ignore
        console.error("🚀 ~ Error Service: useGetPlaylist.ts:22 ~ getPlayList ~ error", error.message)

        setStatePlayList({
          isLoading: false,
          playList: null
        })
      }
    }
  })

  useEffect(() => {
    return () => {
      isActiveHook = false
    }
  }, [])

  const getPlayList = async (props: ReqGetPlayList) => {
    setStatePlayList(s => ({ playList: null, isLoading: true }))

    await debounce(props)
  }

  const cleanStatePlayList = () => {
    setStatePlayList(s => ({ playList: null, isLoading: false }))
  }

  return {
    statePlayList,
    getPlayList,
    cleanStatePlayList
  }
}