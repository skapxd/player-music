import { Header } from '#/components/global/Header/Header'
import { PlaceholderImage } from '#/components/global/PlaceholderImage/PlaceholderImage'
import { IconButton, Slider } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import styles from './index.module.scss'

export default function Home() {

  const [time, setTime] = useState(0)

  return (
    <div className={styles.box}>

    <Header /> 

    <PlaceholderImage width={188} height={137} className={styles.placeholderImageMusic}/>

    <h1>Title</h1>

    <p>Some Description</p>

    <div className={styles.sliderBar}>

      <Slider
        size="small"
        onChange={(e, v) => setTime(+v) }
        defaultValue={0}
        aria-label="Small"
        // valueLabelDisplay="auto"
        max={(3 * 60) + 20}
      />
      <div className={styles.flex}>
        <span>{(time / 60).toFixed(2).replace(".", ":") || "0:00"}</span>
        <span>3:20</span>
        </div>    
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

    </div>
  )
}



function BackPlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={49}
      height={50}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.978 26.611a2.21 2.21 0 010-3.222L18.974 7.443c1.411-1.324 3.722-.323 3.722 1.611v31.892c0 1.934-2.31 2.935-3.722 1.61L1.978 26.612z"
        fill="#fff"
      />
      <path
        d="M20.674 26.611a2.21 2.21 0 010-3.222L37.67 7.443c1.411-1.324 3.721-.323 3.721 1.611v31.892c0 1.934-2.31 2.935-3.72 1.61L20.673 26.612z"
        fill="#fff"
      />
    </svg>
  );
}


function PausePlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={36}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M33.99 18.087c1.473.85 1.473 2.976 0 3.826L4.162 39.136c-1.473.85-3.314-.213-3.314-1.914V2.78C.848 1.078 2.689.015 4.162.865L33.99 18.086z"
        fill="#fff"
      />
    </svg>
  );
}

function NextPlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={49}
      height={50}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M47.022 23.389c.93.873.93 2.35 0 3.222L30.026 42.557c-1.411 1.324-3.722.323-3.722-1.611V9.054c0-1.934 2.31-2.935 3.722-1.61l16.996 15.945z"
        fill="#fff"
      />
      <path
        d="M28.326 23.389c.93.873.93 2.35 0 3.222L11.33 42.557c-1.411 1.324-3.721.323-3.721-1.611V9.054c0-1.934 2.31-2.935 3.72-1.61l16.997 15.945z"
        fill="#fff"
      />
    </svg>
  );
}
