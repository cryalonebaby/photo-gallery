const shuffle = (arr) => {
  const res = arr
    .map(img => ({img, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({img}) => img)

  return res
}

export default shuffle