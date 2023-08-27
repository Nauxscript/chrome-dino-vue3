export function delay(fn: () => void, sec = getRamdomByRange()) {
  const timer = setTimeout(() => {
    fn()
    clearTimeout(timer)
  }, sec * 1000)
}

export function getRamdomByRange(min = 2, max = 6) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
