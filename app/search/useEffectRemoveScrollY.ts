import { useEffect } from 'react'

export const useEffectRemoveScrollY = () => {
  useEffect(() => {
    const html = document.querySelector('html')!

    html.style.overflowY = 'hidden'
    document.body.style.overflowY = 'hidden'

    return () => {
      html.style.overflowY = 'auto'
      document.body.style.overflowY = 'auto'
    }
  }, [])
}
