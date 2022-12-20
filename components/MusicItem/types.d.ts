export interface IMusicItem {
  showHistory?: boolean 
  title: string
  album?: null | string
  thumbnailUrl: string
  onClick?: () => void
}