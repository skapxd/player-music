export interface IMusicItem {
  showHistory?: boolean 
  title: string
  album?: null | string
  onClick?: () => void
}