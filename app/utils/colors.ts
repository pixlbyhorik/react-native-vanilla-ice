const getRandomHexColorWithCoral = () => {
  const red = Math.floor(Math.random() * 56) + 200
  const green = Math.floor(Math.random() * 56) + 100
  const blue = Math.floor(Math.random() * 56) + 100

  const hex = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`

  return hex
}

const getRandomHexColorWithGreen = () => {
  const red = Math.floor(Math.random() * 56) + 100
  const green = Math.floor(Math.random() * 56) + 200
  const blue = Math.floor(Math.random() * 56) + 150

  const hex = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`

  return hex
}

const getRandomHexColorWithDarkBlue = () => {
  const red = Math.floor(Math.random() * 56) + 100
  const green = Math.floor(Math.random() * 56) + 150
  const blue = Math.floor(Math.random() * 56) + 200

  const hex = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`

  return hex
}

export { getRandomHexColorWithCoral, getRandomHexColorWithDarkBlue, getRandomHexColorWithGreen }

