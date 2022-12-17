import "#/styles/normalize.css"
import '#/styles/globals.css'
import type { AppProps } from 'next/app'
import { BackgroundGradient } from '#/components/global/BackgroundGradient/BackgroundGradient'

export default function MyApp({ Component, pageProps }: AppProps) {
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
