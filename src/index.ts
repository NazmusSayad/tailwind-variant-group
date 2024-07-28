const tailwindVariantRegex = /[\S]+:\{[^}]+\}/gm

function joinPrefixAndValue(prefix: string, args: string[]) {
  return args
    .filter((a) => a)
    .map((a) => prefix + a)
    .join(' ')
}

function extractMatchedVariant(matchedStr: string) {
  const [, prefix = '', value = ''] = matchedStr.match(/(.*)\{(.*)\}/) ?? []
  return joinPrefixAndValue(prefix, value.split(/ +/))
}

function flatArray(args: Args) {
  const flatted = args.flat(Infinity)
  return flatted.filter((a) => {
    return (
      a &&
      (typeof a === 'string' ||
        typeof a === 'number' ||
        a instanceof String ||
        a instanceof Number)
    )
  }) as string[]
}

function transform(code: string) {
  return code.replace(tailwindVariantRegex, extractMatchedVariant)
}

function twGroup(v: string, ...args: [Args[number], ...Args]) {
  return joinPrefixAndValue(
    v.endsWith(':') ? v : v + ':',
    flatArray(args).join(' ').split(' ')
  )
}

function tw(...args: Args) {
  return transform(flatArray(args).join(' '))
}

tw.g = twGroup
tw.group = twGroup
tw.transform = transform

export default tw
export { tw, twGroup, twGroup as twg, transform }

type Args = (unknown | Args)[]
