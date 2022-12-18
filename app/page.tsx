"use client";
import { AleatorioIcon } from '#/components/AleatorioIcon/AleatorioIcon';
import { BackPlayIcon } from '#/components/BackPlayIcon/BackPlayIcon';
import { Header } from '#/components/Header/Header'
import { HeartIcon } from '#/components/HeartIcon/HeartIcon';
import { NextPlayIcon } from '#/components/NextPlayIcon/NextPlayIcon';
import { OptionsIcon } from '#/components/OptionsIcon/OptionsIcon';
import { PausePlayIcon } from '#/components/PausePlayIcon/PausePlayIcon';
import { PlaceholderImage } from '#/components/PlaceholderImage/PlaceholderImage'
import { ReplayIcon } from '#/components/ReplayIcon/ReplayIcon';
import { IconButton, Slider } from '@mui/material'
import Link from 'next/link'
import styles from './index.module.scss'
import BottomDrawer from '#/components/BottomDrawer/BottomDrawer';
import { SliderComponent } from './SliderComponent';

export default function Home() {

  return (
    <div className={styles.box}>

    <Header /> 

    <PlaceholderImage width={188} height={137} className={styles.placeholderImageMusic}/>

    <h1>Title</h1>

    <p>Some Description</p>

    <div className={styles.sliderBar}>

      <SliderComponent />
      
    </div>

      <div className={styles.flex}>
        <IconButton size="large">
          <BackPlayIcon />
        </IconButton>

        <IconButton size="large">
          <PausePlayIcon />
        </IconButton>

        <IconButton size="large">
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

      <BottomDrawer />
    </div>
  )
}
