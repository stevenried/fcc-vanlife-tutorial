import { NavLink } from 'react-router-dom'
import Wrapper from '../Layout/Wrapper'
import classes from './HostNavigation.module.css'

function HostNavigation() {
  const activeLink = ({ isActive }) => (isActive ? classes.active : undefined)

  return (
    <Wrapper>
      <nav className={classes['host-nav']}>
        <ul>
          <li>
            <NavLink to="." className={activeLink} end>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="income" className={activeLink}>
              Income
            </NavLink>
          </li>
          <li>
            <NavLink to="vans" className={activeLink}>
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={activeLink}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}

export default HostNavigation
