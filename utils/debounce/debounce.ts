import { IDebounce } from './types'

export function Debounce (props: IDebounce) {
  const {
    delay = 300,
    immediate = false,
    fn = () => console.log('default function param of the Debounce')
  } = props

  let timerId: NodeJS.Timeout

  return async function executedFunction (...args: any[]) {
    // Evalúa que exista un setTimeOut
    // Lo eliminará en caso de existir
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (timerId) clearTimeout(timerId)

    // @ts-expect-error
    if (immediate) return fn(...args)

    timerId = setTimeout(() => {
      // @ts-expect-error
      fn(...args)
    }, delay)
  }
}
