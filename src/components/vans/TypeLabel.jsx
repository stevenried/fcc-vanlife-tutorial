import classes from './TypeLabel.module.css'
import { capitalize } from '../../utils'

const bgColor = (type) => {
  switch (type) {
    case 'simple':
      return 'sunrise-orange'
    case 'rugged':
      return 'deep-sea-green'
    case 'luxury':
      return 'rangoon-green'
    default:
      return
  }
}

function TypeLabel({ type, className }) {
  const classNames = `${classes['type-label']} ${
    classes[bgColor(type)]
  } ${className}`

  return <div className={classNames}>{capitalize(type)}</div>
}

export default TypeLabel
