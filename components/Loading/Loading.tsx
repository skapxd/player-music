import { LinearProgress } from '@mui/material'
import style from './Loading.module.scss'

interface Props {
  canShow: boolean
}
export function Loading (props: Props) {
  const { canShow } = props

  if (!canShow) return <></>

  return (
    <div className={style.loading}>
      <LinearProgress />
    </div>
  )
}
