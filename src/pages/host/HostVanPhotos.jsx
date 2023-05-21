import { useOutletContext } from 'react-router-dom'

import classes from './HostVanPhotosPage.module.css'

function HostVanPhotosPage() {
  const van = useOutletContext()

  return (
    <div className={classes['photos-container']}>
      <div className={classes['img-parent']}>
        <img src={van.imageUrl} alt="" />
      </div>
    </div>
  )
}

export default HostVanPhotosPage
