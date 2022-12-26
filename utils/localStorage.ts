import { PlayList } from './../app/search/provider/types.d'
import { Music } from '#/app/search/provider/types'

export const enum LocalStorageKey {
  searchHistory = 'searchHistory'
}

const setLocalStorage = (key: LocalStorageKey, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorage = (key: LocalStorageKey) => {
  const data = window.localStorage.getItem(key)
  return JSON.parse(data as string)
}

export const setHistoryLocalStorage = (value: Music) => {
  const currentListHistory = getLocalStorage(LocalStorageKey.searchHistory)
    ?.map((e: string) => JSON.parse(e)) ?? []

  const listMusic: Music[] = [...currentListHistory, value]

  const removeDuplicateObject = (function () {
    const _ = listMusic.map(e => JSON.stringify(e))

    return [...(new Set(_))]
      .reverse()
      .splice(0, 3)
  })()

  setLocalStorage(LocalStorageKey.searchHistory, removeDuplicateObject)
}

export const getHistoryLocalStorage = <T extends Music | PlayList>(): T[] => {
  if (typeof window === 'undefined') return []
  const data = getLocalStorage(LocalStorageKey.searchHistory) ?? []

  return data
    .map((e: string) => JSON.parse(e))
}
