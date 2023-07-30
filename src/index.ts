// const tailwindVariantRegex = /(([a-z\-0-9]+|\[.*\]))\:\(.*?\)/gim
const tailwindVariantRegex = /([a-z\-0-9]+)\:\(.*?\)/gim

function prefixed(prefix: string, ...args: string[]) {
  return args.map((a) => prefix + a).join(' ')
}

function extractVariant(code: string) {
  const { prefix, value } = code.match(/(?<prefix>.*)\((?<value>.*)\)/)!.groups!
  const classes = prefixed(prefix, ...value.split(/ +/))
  return classes
}

const transform = (code: string) => {
  return code.replace(tailwindVariantRegex, extractVariant)
}

function tw(...args: string[]) {
  return args.map(transform).join(' ')
}

export default tw
export { transform  , tw }
