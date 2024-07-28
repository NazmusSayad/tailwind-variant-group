import tw from '.'

const result = tw(
  'bg-red hover:{bg-black text-black}',

  true && 'cs-true',
  false && 'cs-false',

  new Blob() || 3,

  true
    ? ['sm:{hidden transition-all}', 'lg:{overflow}']
    : 'md:{flex grid flex-wrap flex-nowrap}'
)

console.log(result)
