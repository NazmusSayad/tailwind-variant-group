const tailwindVariantRegex =
  /((?:[\/\:\-\_a-z0-9]+|\[[\<\>\|\~\*\^\$\&\-\=\_a-z0-9]+\])+):\{(.*)\}/gim

function extractVariant(code: string) {
  const { prefix, value } = code.match(/(?<prefix>.*)\{(?<value>.*)\}/)!.groups!
  return value
    .split(/ +/)
    .map((v) => prefix + v)
    .join(' ')
}

const transform = (code: string) => {
  return code.replace(tailwindVariantRegex, extractVariant)
}

function tw(...args: NestedArray) {
  const flatted = args.flat(Infinity)
  const filteredArgs = flatted.filter((a) => {
    return (
      typeof a === 'string' ||
      typeof a === 'number' ||
      a instanceof String ||
      a instanceof Number
    )
  })

  return transform(filteredArgs.join(' '))
}

export default tw
export { transform, tw }

type NestedArray = (unknown | NestedArray)[]
