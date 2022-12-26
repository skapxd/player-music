export interface ReqGetPlayList {
  list: string
}

export interface RespGetPlayList {
  type: 'listOfMusic' | 'MusicsFromPlaylist'
  list: PlayList[] | Music[]
}

export interface Music {
  youtubeId: string
  title: string
  artists: Artist[]
  album?: string
  thumbnailUrl: string
  duration: Duration
  isExplicit: boolean
}

export interface Artist {
  name: string
  id: string
}

export interface Duration {
  label: string
  totalSeconds: number
}

export interface PlayList {
  playlistId: string
  title: string
  totalSongs: number
  thumbnailUrl: string
}
