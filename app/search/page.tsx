"use client";
import { MusicItem } from "#/components/MusicItem/MusicItem";
import { useDebounce } from "#/utils/debounce/useDebounce";
import { IconButton } from "@mui/material";
import { useGetPlaylist } from "./provider/useGetPlaylist";
import Style from "./search.module.scss"

export default function page() {

  const {statePlayList, getPlayList} = useGetPlaylist()

  const debounce = useDebounce({
    // @ts-ignore
    fn: (value) => getPlayList({list: value}),
    delay: 500
  })

  return (
    <div className={Style.search}>
      <div className={Style.bar}>
        <IconButton size="large" onClick={() => history.back()} >
          <BackIcon />
        </IconButton>

        <input
          placeholder="Buscar playlist"
          onChange={(e) => {
            const {value} = e.currentTarget

            try {
              const url = new URL(value)
              const list = url.searchParams.get("list")
  
              debounce(list)
              
            } catch (error) {
              debounce(value.trim())
              
            }
            
          }}
        />
      </div>

      <div className={Style.divider}></div>

      <div className={Style.results} >
          {Array.from({length: 100}).map((e,i) => {
            return <MusicItem key={i}/>
          })

          }


          {/* {statePlayList.playList.map((e, i)=> {
            return <MusicItem />
          })}  */}
        </div>
    </div>
  )
}


function BackIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 11H5.414l5.364-5.364a1 1 0 10-1.414-1.414l-7.071 7.071a1.009 1.009 0 00-.125.152c-.016.025-.028.053-.042.079-.017.031-.036.06-.05.093-.014.034-.022.069-.031.104-.009.028-.02.054-.025.083A1 1 0 002 12v.002c0 .065.007.13.02.194.006.03.017.058.026.087.01.033.017.067.03.1.015.034.034.066.052.098.014.025.025.05.04.073a.98.98 0 00.125.154l7.071 7.07a1 1 0 001.414-1.414L5.414 13H21a1 1 0 000-2z"
        fill="#888"
      />
    </svg>
  );
}
