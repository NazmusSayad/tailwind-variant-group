import tw from '.'

const result = tw(
  'bg-red hover:{bg-black text-black}',
  true
    ? ['sm:{hidden transition-all}', 'lg:{overflow}']
    : 'md:{flex grid flex-wrap flex-nowrap}'
)

console.log(result)
