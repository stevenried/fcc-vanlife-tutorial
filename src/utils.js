export function bgColor(type) {
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

export function capitalize(string) {
  const firstChar = string.charAt(0)
  const remainingString = string.slice(1)

  return firstChar.toUpperCase(firstChar) + remainingString
}
