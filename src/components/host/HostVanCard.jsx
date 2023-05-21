import classes from './HostVansCard.module.css'
import { Link } from 'react-router-dom'

function HostVanCard({ van }) {
  return (
    <Link to={`/host/vans/${van.id}`} className={classes.link}>
      <li className={classes['van-card']}>
        <div className={classes.flex}>
          <div className={classes['img-parent']}>
            <img
              src={van.imageUrl}
              alt={`Image of this user's ${van.name} van`}
            />
          </div>
          <div>
            <h2>{van.name}</h2>
            <p>${van.price}/day</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default HostVanCard
