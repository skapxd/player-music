import { Header } from "#/components/Header/Header";
import { PlaceholderImage } from "#/components/PlaceholderImage/PlaceholderImage";
import style from "./index.module.scss"

export default function Page() {
  return (
    <div className={style.box}>
      <Header /> 

      <div className={style.body}>
        <h1>Play list</h1>

    <div className={style.playlist}>
      {Array.from({length: 10}).map((e,i) => {
        return <div className={style.boxPlaylist} >
          <PlaceholderImage /> 
          </div>
      })}
    </div>

      

      </div>
    </div>
  )
}