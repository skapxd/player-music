'use client'
import '#/styles/normalize.css'
import '#/styles/globals.css'
import { BackgroundGradient } from '#/components/BackgroundGradient/BackgroundGradient'
import { useEffect } from 'react'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <html>
      <head >
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Skap music</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#4C1325" />

      </head>

      <body>
        <div className='appBox'>
          <BackgroundGradient />
          <div style={{ zIndex: 1 }}>{children}</div>
        </div>
      </body>
    </html>
  )
}
