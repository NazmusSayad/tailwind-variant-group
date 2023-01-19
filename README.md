# tailwind-variant-group

Stop writting the same code again and again.

<a href="https://npmjs.com/package/tailwind-variant-group">
  <img src="https://img.shields.io/npm/v/tailwind-variant-group" alt="npm package"> 
</a>

---

## Example

## Installation

- with npm

```shell
npm i get-classnames
npm i -D tailwind-variant-group
```

- with yarn

```shell
yarn add get-classnames
yarn add -D tailwind-variant-group
```

- with pnpm

```shell
pnpm add get-classnames
pnpm add -D tailwind-variant-group
```

<br/> <br/>

## Usages:

`/* tailwind.config.cjs */`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ['./src/**/*.{jsx,tsx}'],
    transform: require('tailwind-variant-group').default,
  },
}
```

`/* Component.js */`

```js
import cn from 'get-classnames'
/* or */
import cn from 'tailwind-variant-group/className'

const Component = () => {
  return (
    <button
      className={cn.tw(
        'hover:(bg-black text-black)',
        true
          ? 'sm:(hidden transition-all)'
          : 'md:(flex grid flex-wrap flex-nowrap)'
      )}
    >
      Click me
    </button>
  )
}
```

Made by [Nazmus Sayad](https://github.com/NazmusSayad) with ❤️.
