import cn from 'get-classnames'

const tailwindGroup = (code: string) => {
  const variantGroupsRegex = /([a-z\-0-9:]+:)\((.*?)\)/g
  const variantGroupMatches = [...code.matchAll(variantGroupsRegex)]

  variantGroupMatches.forEach(([matchStr, variants, classes]) => {
    const parsedClasses = cn.prefix(variants, classes)
    code = code.replace(matchStr, parsedClasses)
  })

  return code
}

export default tailwindGroup
