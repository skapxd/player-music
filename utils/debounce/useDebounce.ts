import { useMemo } from 'react'
import { Debounce } from './debounce'
import { IUseDebounce } from './types'

export const useDebounce = <T>(props: IUseDebounce<T>) => {
  const {
    dependencies = [],
    fn = async () => console.log('default function param of useDebounce'),
    delay = 0
  } = props ?? {}

  const genericDebounce = useMemo(() => {
    return Debounce({
      delay,
      fn
    })
  }, dependencies)

  return genericDebounce
}
