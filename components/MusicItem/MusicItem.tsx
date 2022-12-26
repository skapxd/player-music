import Image from 'next/image'
import { ListItem } from '@mui/material'
import styles from './MusicItem.module.scss'
import { IMusicItem } from './types'

export function MusicItem (props: IMusicItem) {
  const { showHistory, title, album, onClick, thumbnailUrl } = props ?? {}
  return (
    <ListItem button className={styles.box} onClick={onClick}>

      {(showHistory ?? false) && <HistoryIcon className={styles.history}/>}
      {/* <PlaceholderImageIcon className={styles.placeholder}/> */}
      <Image
        alt="leeerob"
        // src={"https://lh3.googleusercontent.com/qO0fDnWvKsxQPBvJTZV-IA3qSfpJ82lvqMYjKWhSP1me8Ca3CZV6QOGUkVr_aXnhTQdoYyj-UO_qCLtB=w120-h120-l90-rj"}
        src={thumbnailUrl}
        className={styles.placeholder}
        width={50}
        height={50}
      />

      <div className={styles.col}>
        <h2>{title}</h2>

        <p>{album}</p>
      </div>
    </ListItem>
  )
}

function HistoryIcon (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      {...props}
    >
      <svg
        width={24}
        height={25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 8.93H12v5l4.28 2.54.72-1.21-3.5-2.08V8.93zm-.5-5a9 9 0 00-9 9H1l3.96 4.03L9 12.93H6a7 7 0 117 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.895 8.895 0 0013 21.93a9 9 0 000-18z"
          fill="#AFAFAF"
        />
      </svg>
    </div>
  )
}
