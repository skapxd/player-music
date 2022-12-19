import { IDebounce } from "./types";

export function Debounce(props: IDebounce) {
  const {
    delay = 300,
    immediate = false,
    fn = () => console.log('default function param of the Debounce'),
  } = props;

  let timerId: NodeJS.Timeout

  return async function executedFunction(...args: Array<any>) {
    // Evalúa que exista un setTimeOut
    // Lo eliminará en caso de existir
    if (timerId) clearTimeout(timerId);

    // @ts-ignore
    if (immediate) return fn(...args);

    timerId = setTimeout(() => {
      // @ts-ignore
      fn(...args);
    }, delay);
  };
}