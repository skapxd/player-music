import "#/styles/normalize.css"
import '#/styles/globals.css'
import type { AppProps } from 'next/app'
import { BackgroundGradient } from '#/components/BackgroundGradient/BackgroundGradient'
import { useEffect } from "react"

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <>
      <div className='appBox'>
        <BackgroundGradient /> 
        <div style={{zIndex: 1}} >
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
