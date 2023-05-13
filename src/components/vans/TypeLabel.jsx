import classes from './TypeLabel.module.css'

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

const capitalize = (string) => {
  const firstChar = string.charAt(0)
  const remainingString = string.slice(1)

  return firstChar.toUpperCase(firstChar) + remainingString
}

function TypeLabel({ type }) {
  const classNames = `${classes['type-label']} ${classes[bgColor(type)]}`

  return <div className={classNames}>{capitalize(type)}</div>
}

export default TypeLabel
