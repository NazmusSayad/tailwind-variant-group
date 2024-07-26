const tailwindVariantRegex = /(([a-z\-0-9]+|\[.*\]))\:\{(.*?)\}/gim

function prefixed(prefix: string, ...args: string[]) {
  return args.map((a) => prefix + a).join(' ')
}

function extractVariant(code: string) {
  const { prefix, value } = code.match(/(?<prefix>.*)\{(?<value>.*)\}/)!.groups!
  return prefixed(prefix, ...value.split(/ +/))
}

const transform = (code: string) => {
  return code.replace(tailwindVariantRegex, extractVariant)
}

function tw(...args: NestedArray) {
  const flattedArgs = args.map((arg) =>
    Array.isArray(arg) ? (arg as any[]).flat(Infinity).join(' ') : arg
  )

  return transform(flattedArgs.join(' '))
}

export default tw
export { transform, tw }
type NestedArray = (string | number | NestedArray)[]
