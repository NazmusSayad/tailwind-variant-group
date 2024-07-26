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

function tw(strings: TemplateStringsArray, ...args: NestedArray) {
  const flattedArgs = args.map((arg) =>
    Array.isArray(arg) ? (arg as any[]).flat(Infinity).join(' ') : arg
  )

  const combined = strings.reduce(
    (acc, str, i) => acc + str + (flattedArgs[i] || ''),
    ''
  )

  return transform(combined)
}

export default tw
export { transform, tw }
type NestedArray = (string | number | NestedArray)[]
