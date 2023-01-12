import cn, { tailwindVariantRegex } from 'get-classnames'

const tailwindGroup = (code: string) => {
  const variantGroupMatches = [...code.matchAll(tailwindVariantRegex)]

  variantGroupMatches.forEach(([matchStr, key, value]) => {
    const classNames = cn.prefix(key, value)
    code = code.replace(matchStr, classNames)
  })

  return code
}

export default tailwindGroup
