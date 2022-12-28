'use client'
import { AleatorioIcon } from '#/components/AleatorioIcon/AleatorioIcon'
import { BackPlayIcon } from '#/components/BackPlayIcon/BackPlayIcon'
import { Header } from '#/components/Header/Header'
import { HeartIcon } from '#/components/HeartIcon/HeartIcon'
import { NextPlayIcon } from '#/components/NextPlayIcon/NextPlayIcon'
import { OptionsIcon } from '#/components/OptionsIcon/OptionsIcon'
import { PausePlayIcon } from '#/components/PausePlayIcon/PausePlayIcon'
import { ReplayIcon } from '#/components/ReplayIcon/ReplayIcon'
import { IconButton } from '@mui/material'
import styles from './player.module.scss'
import { BottomDrawer } from '#/components/BottomDrawer/BottomDrawer'
import { SliderComponent } from './SliderComponent'
import { useEffect, useState } from 'react'
import { useGetAllMusic } from '#/components/BottomDrawer/useGetAllMusic'
import { Loading } from '#/components/Loading/Loading'
import { HookCurrentMusic } from './types'

export default function Player () {
  const { getAllMusic, musicState } = useGetAllMusic()

  const [currentMusic, setCurrentMusic] = useState<HookCurrentMusic>({
    index: 0,
    id: '',
    title: 'Title ',
    description: 'Some description ',
    thumbnailUrl: ' '
  })

  useEffect(() => {
    const id = new URL(location.href).searchParams.get('id') ?? ''

    if (id === '') console.error('🚀 ~ Error UseEffect: BottomDrawer.tsx:38 ~ useEffect ~ id', id)
    getAllMusic(id).catch((err) => console.error('🚀 ~ Error UseEffect: BottomDrawer.tsx:38 ~ useEffect ~ err', err))
  }, [])

  useEffect(() => {
    if (musicState.properties.length === 0) console.log('🚀 ~ useEffect close clausule: page.tsx:38 ~ useEffect ~ musicState.properties.length', musicState.properties.length)

    setCurrentMusic({
      index: 0,
      id: musicState.properties[0]?.youtubeId ?? '',
      title: musicState.properties[0]?.title ?? '',
      description: musicState.properties[0]?.album ?? '',
      thumbnailUrl: musicState.properties[0]?.thumbnailUrl ?? ''
    })
  }, [musicState.properties])

  return (
    <div className={styles.box}>
      <Loading canShow={musicState.isLoading}/>

      <Header />

      <img src={currentMusic.thumbnailUrl} width={188} height={137} className={styles.placeholderImageMusic} alt='asd'/>

      <h1>{currentMusic.title}</h1>

      <p>{currentMusic.description}</p>

      <div className={styles.sliderBar}>

        <SliderComponent />

      </div>

      <div className={styles.flex}>
        <IconButton size="large" onClick={() => {
          const index = currentMusic.index - 1

          setCurrentMusic({
            index,
            id: musicState.properties.at(index)?.youtubeId ?? '',
            title: musicState.properties.at(index)?.title ?? '',
            description: musicState.properties.at(index)?.album ?? '',
            thumbnailUrl: musicState.properties.at(index)?.thumbnailUrl ?? ''
          })
        }}
        >
          <BackPlayIcon />
        </IconButton>

        <IconButton size="large">
          <PausePlayIcon />
        </IconButton>

        <IconButton size="large" onClick={() => {
          if (currentMusic.index === musicState.properties.length) {
            return setCurrentMusic({
              index: 0,
              id: musicState.properties.at(0)?.youtubeId ?? '',
              title: musicState.properties.at(0)?.title ?? '',
              description: musicState.properties.at(0)?.album ?? '',
              thumbnailUrl: musicState.properties.at(0)?.thumbnailUrl ?? ''
            })
          }

          const index = currentMusic.index + 1

          setCurrentMusic({
            index,
            id: musicState.properties.at(index)?.youtubeId ?? '',
            title: musicState.properties.at(index)?.title ?? '',
            description: musicState.properties.at(index)?.album ?? '',
            thumbnailUrl: musicState.properties.at(index)?.thumbnailUrl ?? ''
          })
        }}
        >
          <NextPlayIcon />
        </IconButton>
      </div>

      <div className={styles.flex}>

        <IconButton size="large">
          <HeartIcon />
        </IconButton>

        <IconButton size="large">
          <AleatorioIcon />
        </IconButton>

        <IconButton size="large">
          <ReplayIcon />
        </IconButton>

        <IconButton size="large">
          <OptionsIcon />
        </IconButton>
      </div>

      <BottomDrawer listMusic={musicState.properties}/>
    </div>
  )
}
