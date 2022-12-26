'use client'
import { useEffect, useState } from 'react'
import { Header } from '#/components/Header/Header'
import style from './index.module.scss'
import { Loading } from '#/components/Loading/Loading'
import { getHistoryLocalStorage } from '#/utils/localStorage'
import { PlayList } from './search/provider/types'
import Link from 'next/link'

const useGetPlayList = () => {
  const [playListState, setPlayListState] = useState({
    loading: false,
    properties: [] as PlayList[]
  })

  const getPlayListState = async () => {
    setPlayListState({ loading: true, properties: [] })

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const listOfPlayList = getHistoryLocalStorage<PlayList>().filter(e => e.playlistId)

      setPlayListState({
        loading: false,
        properties: listOfPlayList
      })
    } catch (error) {

    }
  }

  return { playListState, getPlayListState }
}

export default function Page (): JSX.Element {
  const { playListState, getPlayListState } = useGetPlayList()

  useEffect(() => {
    getPlayListState().catch((e) => {
      console.error(e)
    })
  }, [])

  return (
    <div className={style.box}>
      <Loading canShow={playListState.loading}/>
      <Header />

      <div className={style.body}>
        <h1>Play list</h1>

        <div className={style.playlist}>
          {playListState.properties.map((e, i) => {
            return (
              <div key={i} className={style.boxPlaylist} >
                <Link href={ `/player?id=${e.playlistId}`}>
                  <img src={e.thumbnailUrl} alt="" />
                </Link>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
