import { getPlaylistService } from './getPlaylist.service'
import { useEffect, useState } from 'react'
import { ReqGetPlayList, RespGetPlayList } from './types'
import { useDebounce } from '#/utils/debounce/useDebounce'

export const useGetPlaylist = () => {
  let isActiveHook = true

  const initPlayList: null | RespGetPlayList = null

  const [statePlayList, setStatePlayList] = useState({
    isLoading: false,
    playList: initPlayList
  })

  const debounce = useDebounce({
    delay: 700,
    // @ts-expect-error
    fn: async (value: any) => {
      try {
        const resp = await getPlaylistService(value)

        if (!isActiveHook) return

        setStatePlayList({
          isLoading: false,
          // @ts-expect-error
          playList: resp
        })
      } catch (error) {
        // @ts-expect-error
        console.error('🚀 ~ Error Service: useGetPlaylist.ts:22 ~ getPlayList ~ error', error.message)

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
