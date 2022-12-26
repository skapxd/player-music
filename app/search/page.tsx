'use client'
import { BackNavigationIcon } from '#/components/BackNavigationIcon/BackNavigationIcon'
import { Loading } from '#/components/Loading/Loading'
import { MusicItem } from '#/components/MusicItem/MusicItem'
import { setHistoryLocalStorage } from '#/utils/localStorage'
import { IconButton } from '@mui/material'
import { HistoryElements } from './HistoryElements'
import { useGetPlaylist } from './provider/useGetPlaylist'
import Style from './search.module.scss'
import { useEffectRemoveScrollY } from './useEffectRemoveScrollY'

export default function page () {
  const { statePlayList, getPlayList, cleanStatePlayList } = useGetPlaylist()

  useEffectRemoveScrollY()

  return (
    <div className={Style.search}>

      <Loading canShow={statePlayList.isLoading}/>
      <div className={Style.header}>

        <div className={Style.bar}>
          <IconButton size="large" onClick={() => history.back()} >
            <BackNavigationIcon />
          </IconButton>

          <input
            autoFocus
            placeholder="Buscar playlist"
            onChange={(e) => {
              const { value } = e.currentTarget
              if (value === '') return cleanStatePlayList()

              getPlayList({ list: value }).catch((e) => {
                // @ts-expect-error
                console.error({ error: error.message })
              })
            }}
          />
        </div>
        <div className={Style.divider}></div>

      </div>

      <div className={Style.body}>
        <div className={Style.results}>
          {/*  @ts-expect-error */}
          <HistoryElements show={(statePlayList.playList?.list) == null}/>

          {/*  @ts-expect-error */}
          {statePlayList.playList?.type === 'listOfMusic' &&
            // @ts-expect-error
            statePlayList.playList?.list?.map((e, i) => {
              return (
                <MusicItem
                  key={i}
                  title={e.title}
                  album={e.album}
                  thumbnailUrl={e.thumbnailUrl}
                  onClick={() => {
                    setHistoryLocalStorage(e)
                    console.log({ e })
                  }}
                />
              )
            })
          }

          {/*  @ts-expect-error */}
          {statePlayList.playList?.type === 'MusicsFromPlaylist' &&
            // @ts-expect-error
            statePlayList.playList?.list?.map((e, i) => {
              return (
                <MusicItem
                  key={i}
                  title={e.title}
                  album={e.totalSongs}
                  thumbnailUrl={e.thumbnailUrl}
                  onClick={() => {
                    setHistoryLocalStorage(e)
                    console.log({ e })
                  }}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}
