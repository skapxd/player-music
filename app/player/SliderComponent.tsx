"use client";
import { Slider } from '@mui/material'
import { useState } from 'react'
import styles from './player.module.scss'

export const SliderComponent = () => {
  const [time, setTime] = useState(0)

return (
  <>
    <Slider
      size="small"
      onChange={(e, v) => setTime(+v) }
      defaultValue={0}
      aria-label="Small"
      max={(3 * 60) + 20}
    />

    <div className={styles.flex}>
      <span>{(time / 60).toFixed(2).replace(".", ":") || "0:00"}</span>
      <span>3:20</span>
    </div>    
  </>
  )
}