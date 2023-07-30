# tailwind-variant-group

Stop writting the same code again and again.

<a href="https://npmjs.com/package/tailwind-variant-group">
  <img src="https://img.shields.io/npm/v/tailwind-variant-group" alt="npm package"> 
</a>

---

## Installation

- with npm

```shell
npm i tailwind-variant-group
```

- with yarn

```shell
yarn add tailwind-variant-group
```

- with pnpm

```shell
pnpm add tailwind-variant-group
```

<br/> <br/>

## Usages:

`/* tailwind.config.cjs */`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ['./src/**/*.{jsx,tsx}'],
    transform: require('tailwind-variant-group').transform,
  },
}
```

`/* Component.js */`

```js
import tw from 'tailwind-variant-group'

const Component = () => {
  return (
    <button
      className={tw(
        'bg-red hover:(bg-black text-black)',
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
