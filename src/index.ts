import cn, { tailwindVariantRegex } from 'get-classnames'

const tailwindGroup = (code: string) => {
  return code.replace(tailwindVariantRegex, (matched) => {
    const [, key, value] = matched.match(/(.*)\((.*)\)/)!
    return cn.prefix(key, value)
  })
}

export default tailwindGroup
