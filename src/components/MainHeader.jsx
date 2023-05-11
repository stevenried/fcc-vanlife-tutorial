import { Link } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import classes from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={classes['main-header']}>
      <Link to="/" className={classes.logo}>
        <h1>#VANLIFE</h1>
      </Link>
      <MainNavigation />
    </header>
  )
}

export default MainHeader
