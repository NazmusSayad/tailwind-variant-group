const tailwindVariantRegex = /([a-z\-0-9:]+:)\((.*?)\)/gim

const tailwindGroup = (code: string) => {
  return code.replace(tailwindVariantRegex, (matched) => {
    const [, key, value] = matched.match(/(.*)\((.*)\)/)!
    return value
      .split(' ')
      .filter((v) => v.trim())
      .map((v) => key + v.trim())
      .join(' ')
  })
}

export default tailwindGroup
