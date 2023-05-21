import { NavLink } from 'react-router-dom'

import classes from './MainNavigation.module.css'

function MainNavigation() {
  const activeLink = ({ isActive }) => (isActive ? classes.active : undefined)

  return (
    <>
      <nav>
        <ul className={classes['nav-links']}>
          <li>
            <NavLink to="host" className={activeLink}>
              Host
            </NavLink>
          </li>
          <li>
            <NavLink to="about" className={activeLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="vans" className={activeLink}>
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MainNavigation
