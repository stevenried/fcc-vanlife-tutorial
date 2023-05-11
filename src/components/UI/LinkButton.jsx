import { Link } from 'react-router-dom'
import classes from './LinkButton.module.css'

function LinkButton(props) {
  const buttonLinkClasses = props.className
    ? classes['link-button'] + props.className
    : classes['link-button']

  return (
    <Link to={props.to} className={buttonLinkClasses}>
      {props.children}
    </Link>
  )
}

export default LinkButton
