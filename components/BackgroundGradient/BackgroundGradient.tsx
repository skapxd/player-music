import style from './BackgroundGradient.module.scss'
export function BackgroundGradient () {
  return (
    <div style={{ position: 'relative' }}>
      <div className={style.box}></div>
    </div>
  )
}
