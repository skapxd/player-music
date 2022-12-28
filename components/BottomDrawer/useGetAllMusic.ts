import { useState } from 'react'
import { getAllMusicService } from './getAllMusic.service'
import { List } from './types'

export const useGetAllMusic = () => {
  const [musicState, setMusicState] = useState({
    isLoading: false,
    properties: [] as List[]
  })

  const getAllMusic = async (id: string) => {
    setMusicState({
      isLoading: true,
      properties: []
    })

    try {
      const json = await getAllMusicService(id)

      setMusicState({
        isLoading: false,
        properties: json.list ?? []
      })
    } catch (error) {
      console.error('🚀 ~ Error Service: page.tsx:24 ~ getAllMusic ~ error', (error as Error).message)

      setMusicState({
        isLoading: false,
        properties: []
      })
    }
  }

  return {
    musicState,
    getAllMusic
  }
}
