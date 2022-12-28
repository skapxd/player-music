import { useEffect, useState } from 'react'

export const useGetSearchParams = (props: string[]) => {
  let isActiveHook = true

  const initParams: Record<string, string | null> = {}
  const [params, setParams] = useState(initParams)

  useEffect(() => {
    if (typeof location === 'undefined') return

    const tempParams: Record<string, string | null> = {}
    props
      .forEach(
        (e) => {
          tempParams[e] = new URL(location.href).searchParams.get(e)
        }
      )

    if (!isActiveHook) return

    setParams(tempParams)

    return () => {
      isActiveHook = false
    }
  }, [])

  return params
}
