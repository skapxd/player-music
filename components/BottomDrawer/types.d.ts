export interface RespGetAllMusic {
  list: List[]
}

export interface List {
  youtubeId?: string
  title: string
  artists: Artist[]
  thumbnailUrl: string
  duration?: Duration
  isExplicit: boolean
  album?: string
}

export interface Artist {
  name: string
  id: string
}

export interface Duration {
  label: string
  totalSeconds: number
}

export interface Props {
  id?: string
  listMusic?: any[]
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}
