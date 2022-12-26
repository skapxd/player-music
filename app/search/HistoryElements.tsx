'use client'
import { MusicItem } from '#/components/MusicItem/MusicItem'
import { getHistoryLocalStorage, setHistoryLocalStorage } from '#/utils/localStorage'
import { useEffect, useState } from 'react'
import { Music } from './provider/types'

interface Props {
  show: boolean
}

export const HistoryElements = (props: Props) => {
  const { show } = props

  const [playListHistory, setPlayListHistory] = useState<Music[]>([])

  useEffect(() => {
    setPlayListHistory(getHistoryLocalStorage())
  }, [])

  if (!show) return <></>

  return (
    <>
      {
        playListHistory.map((e: any, i: number) => {
          return (
            <MusicItem
              key={i}
              showHistory
              thumbnailUrl={e.thumbnailUrl}
              title={e.title}
              album={e.album ?? e.totalSongs}
            />
          )
        })
      }
    </>
  )
}
