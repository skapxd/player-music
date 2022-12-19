"use client";
import { BackNavigationIcon } from "#/components/BackNavigationIcon/BackNavigationIcon";
import { MusicItem } from "#/components/MusicItem/MusicItem";
import { getHistoryLocalStorage, setHistoryLocalStorage } from "#/utils/debounce/localStorage";
import { IconButton } from "@mui/material";
import { useGetPlaylist } from "./provider/useGetPlaylist";
import Style from "./search.module.scss"

export default function page() {

  const {statePlayList, getPlayList} = useGetPlaylist()

  const playListHistory = getHistoryLocalStorage()

  return (
    <div className={Style.search}>
      <div className={Style.bar}>
        <IconButton size="large" onClick={() => history.back()} >
          <BackNavigationIcon />
        </IconButton>

        <input
          autoFocus
          placeholder="Buscar playlist"
          onChange={(e) => {
            const {value} = e.currentTarget
            getPlayList({list: value})
          }}
        />
      </div>

      <div className={Style.divider}></div>



      <div className={Style.results} >
      {!statePlayList.playList?.list && 
        playListHistory.map((e, i) => {
          return <MusicItem 
            showHistory 
            key={i}
            album={e.album}
            title={e.title}
            onClick={() => {
              setHistoryLocalStorage(e)
              console.log({e})
            }}
          />
        })
      }

        {statePlayList.playList?.type === "listOfMusic" && 
          statePlayList.playList?.list?.map((e, i)=> {
            return <MusicItem 
            key={i}
            // @ts-ignore
            album={e.album}
            title={e.title}
            onClick={() => {
            // @ts-ignore
              setHistoryLocalStorage(e)
              console.log({e})
            }}
          />
          })      
        }
        
        {statePlayList.playList?.type === "MusicsFromPlaylist" && 
          statePlayList.playList?.list?.map((e, i)=> {
            
            return <p key={i}>hola</p>
        })} 
      </div>

      {statePlayList.isLoading && 
        <div>
          loading
        </div>
      }
    </div>
  )
}

