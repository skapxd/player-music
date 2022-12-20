"use client";
import { BackNavigationIcon } from "#/components/BackNavigationIcon/BackNavigationIcon";
import { Loading } from "#/components/Loading/Loading";
import { MusicItem } from "#/components/MusicItem/MusicItem";
import { setHistoryLocalStorage } from "#/utils/debounce/localStorage";
import { IconButton } from "@mui/material";
import { HistoryElements } from "./HistoryElements";
import { useGetPlaylist } from "./provider/useGetPlaylist";
import Style from "./search.module.scss"
import { useRemoveScrollY } from "./useRemoveScrollY";

export default function page() {

  const {statePlayList, getPlayList, cleanStatePlayList} = useGetPlaylist()

  useRemoveScrollY()
  
  return (
    <div className={Style.search}>

      <Loading  canShow={statePlayList.isLoading}/>
      <div className={Style.header}>
  
        <div className={Style.bar}>
          <IconButton size="large" onClick={() => history.back()} >
            <BackNavigationIcon />
          </IconButton>

          <input
            autoFocus
            placeholder="Buscar playlist"
            onChange={(e) => {
              const {value} = e.currentTarget
              if (value === '') return  cleanStatePlayList()
              
              getPlayList({list: value})
            }}
          />
        </div>
        <div className={Style.divider}></div>

      </div>

      <div className={Style.body}>
        {/* <p>{JSON.stringify(size, null, 4)}</p> */}
        <div className={Style.results}>
          <HistoryElements show={!statePlayList.playList?.list}/>

          {statePlayList.playList?.type === "listOfMusic" && 
            statePlayList.playList?.list?.map((e, i)=> {
              return <MusicItem
              key={i}
              title={e.title}
              // @ts-ignore
              album={e.album}
              thumbnailUrl={e.thumbnailUrl} 
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
              
              return <MusicItem 
                key={i}
                title={e.title}
                // @ts-ignore
                album={e.totalSongs}
                thumbnailUrl={e.thumbnailUrl} 
                onClick={() => {
                // @ts-ignore
                  setHistoryLocalStorage(e)
                  console.log({e})
                }}  
              />
          })} 
        </div>
      </div>
    </div>
  )
}

