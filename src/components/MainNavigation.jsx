import { NavLink } from 'react-router-dom'

import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <>
      <nav>
        <ul className={classes['nav-links']}>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/vans">Vans</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MainNavigation
