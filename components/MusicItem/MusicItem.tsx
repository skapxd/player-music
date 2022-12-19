import { ListItem } from "@mui/material";
import styles from "./MusicItem.module.scss"
import { IMusicItem } from "./types";

export function MusicItem(props: IMusicItem){

  const {showHistory, title, album, onClick} = props ?? {}
  return (
    <ListItem button className={styles.box}  onClick={onClick}>

      {showHistory && <HistoryIcon className={styles.history}/>}
      <PlaceholderImageIcon className={styles.placeholder}/>

      <div className={styles.col}>
        <h2>{title}</h2>
      
        <p>{album}</p>
      </div>
    </ListItem>
  )
}



function HistoryIcon(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
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
  );
}

function PlaceholderImageIcon(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div {...props} >
          <svg
      width={50}
      height={42}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <rect width={50} height={41.861} rx={4} fill="#6F162C" />
      <g clipPath="url(#prefix__clip0_87_336)" fill="#E3E3E5">
        <path d="M15.75 13.009c3.075-.489 4.492.781 4.25 3.81-1.45 2.293-3.208 2.587-5.277.88-1.134-1.9-.792-3.463 1.027-4.69zM35.975 21.802v7.037h-21.69v-2.934c1.552-1.7 3.164-3.36 4.835-4.983a7.254 7.254 0 002.785 2.198l7.768-7.767c2.16 2.111 4.26 4.26 6.302 6.45z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_87_336">
          <rect
            x={14.07}
            y={12.907}
            width={21.905}
            height={15.93}
            rx={4}
            fill="#fff"
          />
        </clipPath>
      </defs>
    </svg>

    </div>
    );
}
