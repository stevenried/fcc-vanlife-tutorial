import { NavLink } from 'react-router-dom'

import classes from './HostVanDetailHeader.module.css'
import TypeLabel from '../vans/TypeLabel'

function HostVanDetailHeader({ van }) {
  const activeLink = ({ isActive }) => (isActive ? classes.active : undefined)

  return (
    <>
      <div className={classes.summary}>
        <div className={classes.flex}>
          <div className={classes['img-parent']}>
            <img src={van.imageUrl} alt="" />
          </div>
          <div className={classes.title}>
            <TypeLabel type={van.type} className={classes.type} />
            <h2>{van.name}</h2>
            <p>${van.price}/day</p>
          </div>
        </div>
        <nav>
          <ul className={classes.links}>
            <li>
              <NavLink className={activeLink} to="." end>
                Details
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="pricing">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="photos">
                Photos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default HostVanDetailHeader
