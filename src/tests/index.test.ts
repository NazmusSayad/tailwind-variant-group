import { tw } from '..'

test('Test Level: 0', () => {
  expect(tw('lg:{overflow}')).toBe('lg:overflow')
  expect(tw('lg:{overflow hidden}')).toBe('lg:overflow lg:hidden')
  expect(tw('hidden lg:{overflow}')).toBe('hidden lg:overflow')
  expect(tw('sm:{block}')).toBe('sm:block')
  expect(tw('md:{flex inline}')).toBe('md:flex md:inline')
  expect(tw('inline lg:{flex}')).toBe('inline lg:flex')
  expect(tw('xl:{grid}')).toBe('xl:grid')
  expect(tw('hidden xl:{grid gap-4}')).toBe('hidden xl:grid xl:gap-4')
  expect(tw('lg:{block}')).toBe('lg:block')
  expect(tw('lg:{block flex}')).toBe('lg:block lg:flex')
  expect(tw('sm:{inline}')).toBe('sm:inline')
  expect(tw('hidden sm:{inline}')).toBe('hidden sm:inline')
  expect(tw('hidden lg:{hidden block}')).toBe('hidden lg:hidden lg:block')
  expect(tw('sm:{inline-block}')).toBe('sm:inline-block')
  expect(tw('md:{hidden inline-block}')).toBe('md:hidden md:inline-block')
  expect(tw('lg:{flex-none}')).toBe('lg:flex-none')
  expect(tw('hidden lg:{flex-auto}')).toBe('hidden lg:flex-auto')
  expect(tw('xl:{flex-grow}')).toBe('xl:flex-grow')
  expect(tw('lg:{flex-shrink}')).toBe('lg:flex-shrink')
  expect(tw('xl:{order-first}')).toBe('xl:order-first')
  expect(tw('hidden xl:{order-last}')).toBe('hidden xl:order-last')
  expect(tw('lg:{order-1 order-2}')).toBe('lg:order-1 lg:order-2')
  expect(tw('sm:{justify-start}')).toBe('sm:justify-start')
  expect(tw('md:{abc} lg:{adfasdf}')).toBe('md:abc lg:adfasdf')
  expect(tw('hidden lg:{flex-grow flex-shrink}')).toBe(
    'hidden lg:flex-grow lg:flex-shrink'
  )
})

test('Test Level: 1', () => {
  expect(tw('sm:md:lg:{overflow}')).toBe('sm:md:lg:overflow')
  expect(tw('sm:md:lg:{overflow hidden}')).toBe(
    'sm:md:lg:overflow sm:md:lg:hidden'
  )
  expect(tw('sm:md:hidden lg:{overflow}')).toBe('sm:md:hidden lg:overflow')
  expect(tw('sm:md:hover:{block}')).toBe('sm:md:hover:block')
  expect(tw('sm:md:lg:focus:{flex inline}')).toBe(
    'sm:md:lg:focus:flex sm:md:lg:focus:inline'
  )
  expect(tw('sm:md:inline lg:{flex}')).toBe('sm:md:inline lg:flex')
  expect(tw('sm:xl:md:{grid}')).toBe('sm:xl:md:grid')
  expect(tw('sm:hidden xl:md:lg:{grid gap-4}')).toBe(
    'sm:hidden xl:md:lg:grid xl:md:lg:gap-4'
  )
  expect(tw('sm:lg:{block}')).toBe('sm:lg:block')
  expect(tw('sm:lg:{block flex}')).toBe('sm:lg:block sm:lg:flex')
  expect(tw('sm:inline md:lg:{inline}')).toBe('sm:inline md:lg:inline')
  expect(tw('sm:hidden md:sm:{inline}')).toBe('sm:hidden md:sm:inline')
  expect(tw('sm:hidden lg:md:{hidden block}')).toBe(
    'sm:hidden lg:md:hidden lg:md:block'
  )
  expect(tw('sm:lg:md:{inline-block}')).toBe('sm:lg:md:inline-block')
  expect(tw('sm:md:hidden lg:focus:{flex-none}')).toBe(
    'sm:md:hidden lg:focus:flex-none'
  )
  expect(tw('hidden sm:md:lg:{flex-auto}')).toBe('hidden sm:md:lg:flex-auto')
  expect(tw('sm:xl:md:focus-inline:{flex-grow}')).toBe(
    'sm:xl:md:focus-inline:flex-grow'
  )
  expect(tw('lg:focus:md:sm:{flex-shrink}')).toBe('lg:focus:md:sm:flex-shrink')
  expect(tw('hidden sm:lg:focus-inline:{flex-grow flex-shrink}')).toBe(
    'hidden sm:lg:focus-inline:flex-grow sm:lg:focus-inline:flex-shrink'
  )
  expect(tw('sm:xl:lg:{order-first}')).toBe('sm:xl:lg:order-first')
  expect(tw('hidden sm:xl:focus-inline:{order-last}')).toBe(
    'hidden sm:xl:focus-inline:order-last'
  )
  expect(tw('sm:lg:md:focus:{order-1 order-2}')).toBe(
    'sm:lg:md:focus:order-1 sm:lg:md:focus:order-2'
  )
  expect(tw('sm:md:lg:focus-inline:{justify-start}')).toBe(
    'sm:md:lg:focus-inline:justify-start'
  )
  expect(tw('hidden sm:md:lg:focus:{justify-end}')).toBe(
    'hidden sm:md:lg:focus:justify-end'
  )
  expect(tw('sm:md:lg:hover:{justify-center}')).toBe(
    'sm:md:lg:hover:justify-center'
  )
  expect(tw('sm:md:lg:focus:hover:{justify-between}')).toBe(
    'sm:md:lg:focus:hover:justify-between'
  )
})

test('Test Level: 2', () => {
  expect(tw('md:{pt-[something] w-[min(5%,5rem)]}')).toBe(
    'md:pt-[something] md:w-[min(5%,5rem)]'
  )
  expect(tw('sm:lg:{mt-[calc(100%-4rem)]}')).toBe('sm:lg:mt-[calc(100%-4rem)]')
  expect(tw('xl:focus:{h-[2rem] w-[3rem]}')).toBe(
    'xl:focus:h-[2rem] xl:focus:w-[3rem]'
  )
  expect(tw('sm:hover:{m-[10px]}')).toBe('sm:hover:m-[10px]')
  expect(tw('md:focus:{p-[auto]}')).toBe('md:focus:p-[auto]')
  expect(tw('lg:{text-[2em]}')).toBe('lg:text-[2em]')
  expect(tw('xl:hover:{bg-[rgba(255,255,255,0.5)]}')).toBe(
    'xl:hover:bg-[rgba(255,255,255,0.5)]'
  )
  expect(tw('sm:md:lg:{leading-[1.5]}')).toBe('sm:md:lg:leading-[1.5]')
  expect(tw('hidden md:{rounded-[50%]}')).toBe('hidden md:rounded-[50%]')
  expect(tw('sm:focus:{shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]}')).toBe(
    'sm:focus:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'
  )
  expect(tw('sm:lg:xl:focus:{p-[calc(2px+1rem)]}')).toBe(
    'sm:lg:xl:focus:p-[calc(2px+1rem)]'
  )
})

test('Test Level: 3', () => {
  expect(tw('group/edit-hover:{pt-4 pb-6}')).toBe(
    'group/edit-hover:pt-4 group/edit-hover:pb-6'
  )
  expect(tw('data-[test]:{text-[rgba(0,0,0,0.5)] bg-[hsl(0,100%,50%)]}')).toBe(
    'data-[test]:text-[rgba(0,0,0,0.5)] data-[test]:bg-[hsl(0,100%,50%)]'
  )
  expect(tw('group/edit-hover:md:{mt-4 mb-8}')).toBe(
    'group/edit-hover:md:mt-4 group/edit-hover:md:mb-8'
  )
  expect(tw('rtl:group-hover:{text-white bg-black}')).toBe(
    'rtl:group-hover:text-white rtl:group-hover:bg-black'
  )
  expect(tw('data-[custom]:hover:{border-[2px] border-dashed}')).toBe(
    'data-[custom]:hover:border-[2px] data-[custom]:hover:border-dashed'
  )
  expect(tw('sm:data-[test]:md:hover:{w-[calc(100%-2rem)] h-[50%]}')).toBe(
    'sm:data-[test]:md:hover:w-[calc(100%-2rem)] sm:data-[test]:md:hover:h-[50%]'
  )
  expect(tw('group/edit-hover:rtl:focus:{ring-2 ring-offset-2}')).toBe(
    'group/edit-hover:rtl:focus:ring-2 group/edit-hover:rtl:focus:ring-offset-2'
  )
  expect(tw('data-[value]:group-hover:{text-[0.75rem] font-semibold}')).toBe(
    'data-[value]:group-hover:text-[0.75rem] data-[value]:group-hover:font-semibold'
  )
  expect(tw('sm:group/edit-hover:md:{pt-[3px] pb-[5px]}')).toBe(
    'sm:group/edit-hover:md:pt-[3px] sm:group/edit-hover:md:pb-[5px]'
  )
  expect(
    tw('lg:focus:data-[test]:{w-[min(10%,10rem)] h-[max(5rem,10%)]}')
  ).toBe(
    'lg:focus:data-[test]:w-[min(10%,10rem)] lg:focus:data-[test]:h-[max(5rem,10%)]'
  )
  expect(
    tw('group:hover:data-[custom]:md:{p-[calc(2rem+1rem)] m-[1.5rem]}')
  ).toBe(
    'group:hover:data-[custom]:md:p-[calc(2rem+1rem)] group:hover:data-[custom]:md:m-[1.5rem]'
  )
  expect(tw('rtl:group:hover:{text-[color(255,255,255)]}')).toBe(
    'rtl:group:hover:text-[color(255,255,255)]'
  )
  expect(
    tw('data-[attribute]:sm:md:hover:{bg-[hsl(200,100%,50%)] text-[1.25rem]}')
  ).toBe(
    'data-[attribute]:sm:md:hover:bg-[hsl(200,100%,50%)] data-[attribute]:sm:md:hover:text-[1.25rem]'
  )
  expect(tw('sm:group/edit-hover:md:focus:{w-[10%] h-[5rem]}')).toBe(
    'sm:group/edit-hover:md:focus:w-[10%] sm:group/edit-hover:md:focus:h-[5rem]'
  )
  expect(
    tw(
      'data-[test]:lg:focus:hover:{bg-[linear-gradient(to_right,_#ff0,_#0ff)]}'
    )
  ).toBe(
    'data-[test]:lg:focus:hover:bg-[linear-gradient(to_right,_#ff0,_#0ff)]'
  )
  expect(
    tw(
      'group:focus:outline-none:focus-visible:md:hover:{border-[1px] border-solid}'
    )
  ).toBe(
    'group:focus:outline-none:focus-visible:md:hover:border-[1px] group:focus:outline-none:focus-visible:md:hover:border-solid'
  )
  expect(tw('rtl:group-hover:data-[custom]:md:{text-[1rem] bg-[gray]}')).toBe(
    'rtl:group-hover:data-[custom]:md:text-[1rem] rtl:group-hover:data-[custom]:md:bg-[gray]'
  )
  expect(tw('sm:md:lg:hover:data-[test]:{h-[50%] w-[50%]}')).toBe(
    'sm:md:lg:hover:data-[test]:h-[50%] sm:md:lg:hover:data-[test]:w-[50%]'
  )
  expect(
    tw(
      'sm:group/edit-hover:md:focus-visible:hover:{bg-[hsl(120,100%,50%)] text-[1.5rem]}'
    )
  ).toBe(
    'sm:group/edit-hover:md:focus-visible:hover:bg-[hsl(120,100%,50%)] sm:group/edit-hover:md:focus-visible:hover:text-[1.5rem]'
  )
  expect(
    tw(
      'data-[custom]:group-hover:focus:outline-none:md:{ring-[1px] ring-opacity-50}'
    )
  ).toBe(
    'data-[custom]:group-hover:focus:outline-none:md:ring-[1px] data-[custom]:group-hover:focus:outline-none:md:ring-opacity-50'
  )
  expect(
    tw(
      'lg:group/edit-hover:data-[test]:hover:{m-[calc(2rem+3px)] p-[calc(1rem+2px)]}'
    )
  ).toBe(
    'lg:group/edit-hover:data-[test]:hover:m-[calc(2rem+3px)] lg:group/edit-hover:data-[test]:hover:p-[calc(1rem+2px)]'
  )
  expect(
    tw('rtl:group/data-[test]:hover:{text-[0.875rem] bg-[hsl(0,0%,90%)]}')
  ).toBe(
    'rtl:group/data-[test]:hover:text-[0.875rem] rtl:group/data-[test]:hover:bg-[hsl(0,0%,90%)]'
  )
  expect(
    tw('sm:md:group/edit-hover:{text-[rgba(0,0,0,0.8)] bg-[url(image.jpg)]}')
  ).toBe(
    'sm:md:group/edit-hover:text-[rgba(0,0,0,0.8)] sm:md:group/edit-hover:bg-[url(image.jpg)]'
  )
  expect(tw('data-[attribute]:focus-visible:hover:{m-[2rem] p-[1rem]}')).toBe(
    'data-[attribute]:focus-visible:hover:m-[2rem] data-[attribute]:focus-visible:hover:p-[1rem]'
  )
  expect(
    tw(
      'group/edit-hover:rtl:focus-visible:md:hover:{border-[2px] border-dotted}'
    )
  ).toBe(
    'group/edit-hover:rtl:focus-visible:md:hover:border-[2px] group/edit-hover:rtl:focus-visible:md:hover:border-dotted'
  )
  expect(tw('lg:focus:data-[custom]:hover:{ring-[3px] ring-offset-2}')).toBe(
    'lg:focus:data-[custom]:hover:ring-[3px] lg:focus:data-[custom]:hover:ring-offset-2'
  )
  expect(tw('sm:md:lg:hover:focus:{w-[100%] h-[100%]}')).toBe(
    'sm:md:lg:hover:focus:w-[100%] sm:md:lg:hover:focus:h-[100%]'
  )
  expect(
    tw('data-[value]:sm:md:focus-visible:hover:{bg-[black] text-[white]}')
  ).toBe(
    'data-[value]:sm:md:focus-visible:hover:bg-[black] data-[value]:sm:md:focus-visible:hover:text-[white]'
  )
  expect(
    tw('group/edit-hover:focus:data-[custom]:{text-[1.25rem] border-[1px]}')
  ).toBe(
    'group/edit-hover:focus:data-[custom]:text-[1.25rem] group/edit-hover:focus:data-[custom]:border-[1px]'
  )
  expect(tw('sm:lg:data-[test]:md:focus:hover:{p-[2rem] m-[3rem]}')).toBe(
    'sm:lg:data-[test]:md:focus:hover:p-[2rem] sm:lg:data-[test]:md:focus:hover:m-[3rem]'
  )
  expect(
    tw(
      'data-[custom]:group-hover:md:hover:focus-visible:{bg-[hsl(180,100%,50%)] text-[0.75rem]}'
    )
  ).toBe(
    'data-[custom]:group-hover:md:hover:focus-visible:bg-[hsl(180,100%,50%)] data-[custom]:group-hover:md:hover:focus-visible:text-[0.75rem]'
  )
  expect(tw('sm:md:lg:group-focus-visible:hover:{w-[80%] h-[auto]}')).toBe(
    'sm:md:lg:group-focus-visible:hover:w-[80%] sm:md:lg:group-focus-visible:hover:h-[auto]'
  )
})

test('Test Level: 4', () => {
  expect(
    tw(
      "group/data-[custom]:md:focus-visible:hover:lg:after:{content-[''] w-[20px] h-[20px]}"
    )
  ).toBe(
    "group/data-[custom]:md:focus-visible:hover:lg:after:content-[''] group/data-[custom]:md:focus-visible:hover:lg:after:w-[20px] group/data-[custom]:md:focus-visible:hover:lg:after:h-[20px]"
  )
  expect(
    tw('group-hover:lg:focus:outline-none:after:{border-[1px] border-solid}')
  ).toBe(
    'group-hover:lg:focus:outline-none:after:border-[1px] group-hover:lg:focus:outline-none:after:border-solid'
  )
  expect(
    tw(
      'data-[value]:group/edit-hover:md:hover:focus-visible:before:{text-[0.875rem] bg-[linear-gradient(to_right,_#ff0,_#0ff)]}'
    )
  ).toBe(
    'data-[value]:group/edit-hover:md:hover:focus-visible:before:text-[0.875rem] data-[value]:group/edit-hover:md:hover:focus-visible:before:bg-[linear-gradient(to_right,_#ff0,_#0ff)]'
  )
  expect(
    tw(
      'sm:lg:focus-visible:group-hover:md:{rotate-45 translate-x-4 translate-y-2}'
    )
  ).toBe(
    'sm:lg:focus-visible:group-hover:md:rotate-45 sm:lg:focus-visible:group-hover:md:translate-x-4 sm:lg:focus-visible:group-hover:md:translate-y-2'
  )

  expect(
    tw(
      'data-[attribute]:group-hover:lg:focus:md:hover:{scale-[1.2] translate-x-[10%]}'
    )
  ).toBe(
    'data-[attribute]:group-hover:lg:focus:md:hover:scale-[1.2] data-[attribute]:group-hover:lg:focus:md:hover:translate-x-[10%]'
  )

  expect(
    tw(
      'sm:md:lg:focus-visible:group-hover:data-[custom]:{bg-[hsla(0,0%,0,0.5)] ring-[4px] rounded-[50%]}'
    )
  ).toBe(
    'sm:md:lg:focus-visible:group-hover:data-[custom]:bg-[hsla(0,0%,0,0.5)] sm:md:lg:focus-visible:group-hover:data-[custom]:ring-[4px] sm:md:lg:focus-visible:group-hover:data-[custom]:rounded-[50%]'
  )

  expect(
    tw(
      "group/edit-hover:data-[custom]:md:hover:focus-visible:after:{content-['*'] text-[2rem]}"
    )
  ).toBe(
    "group/edit-hover:data-[custom]:md:hover:focus-visible:after:content-['*'] group/edit-hover:data-[custom]:md:hover:focus-visible:after:text-[2rem]"
  )
  expect(
    tw(
      'lg:focus:group-hover:before:data-[attribute]:{content-["] w-[12px] h-[12px] border-[2px]}'
    )
  ).toBe(
    'lg:focus:group-hover:before:data-[attribute]:content-["] lg:focus:group-hover:before:data-[attribute]:w-[12px] lg:focus:group-hover:before:data-[attribute]:h-[12px] lg:focus:group-hover:before:data-[attribute]:border-[2px]'
  )
  expect(
    tw(
      'group-hover:lg:focus-visible:data-[custom]:{bg-[rgba(0,0,0,0.1)] border-[1px] border-dotted}'
    )
  ).toBe(
    'group-hover:lg:focus-visible:data-[custom]:bg-[rgba(0,0,0,0.1)] group-hover:lg:focus-visible:data-[custom]:border-[1px] group-hover:lg:focus-visible:data-[custom]:border-dotted'
  )
  expect(
    tw(
      'data-[test]:group-hover:md:focus-visible:lg:hover:before:{bg-[url("image.png")] w-[100%] h-[100%]}'
    )
  ).toBe(
    'data-[test]:group-hover:md:focus-visible:lg:hover:before:bg-[url("image.png")] data-[test]:group-hover:md:focus-visible:lg:hover:before:w-[100%] data-[test]:group-hover:md:focus-visible:lg:hover:before:h-[100%]'
  )
  expect(
    tw("rtl:group:hover:focus-visible:md:before:{content-['*'] text-[1.5rem]}")
  ).toBe(
    "rtl:group:hover:focus-visible:md:before:content-['*'] rtl:group:hover:focus-visible:md:before:text-[1.5rem]"
  )
  expect(
    tw(
      'sm:lg:focus-visible:data-[custom]:hover:before:{bg-[rgba(255,255,255,0.2)] border-[3px] rounded-md}'
    )
  ).toBe(
    'sm:lg:focus-visible:data-[custom]:hover:before:bg-[rgba(255,255,255,0.2)] sm:lg:focus-visible:data-[custom]:hover:before:border-[3px] sm:lg:focus-visible:data-[custom]:hover:before:rounded-md'
  )
  expect(
    tw('group:focus-visible:md:data-[test]:hover:{border-[4px] border-solid}')
  ).toBe(
    'group:focus-visible:md:data-[test]:hover:border-[4px] group:focus-visible:md:data-[test]:hover:border-solid'
  )
  expect(
    tw(
      'lg:group-hover:data-[test]:focus-visible:before:{text-[1rem] bg-[hsl(120,100%,50%)]}'
    )
  ).toBe(
    'lg:group-hover:data-[test]:focus-visible:before:text-[1rem] lg:group-hover:data-[test]:focus-visible:before:bg-[hsl(120,100%,50%)]'
  )
  expect(
    tw(
      'data-[test]:focus-visible:group-hover:lg:after:{content-["] w-[16px] h-[16px]}'
    )
  ).toBe(
    'data-[test]:focus-visible:group-hover:lg:after:content-["] data-[test]:focus-visible:group-hover:lg:after:w-[16px] data-[test]:focus-visible:group-hover:lg:after:h-[16px]'
  )
  expect(
    tw('sm:group-hover:md:focus-visible:lg:before:{border-[2px] border-dashed}')
  ).toBe(
    'sm:group-hover:md:focus-visible:lg:before:border-[2px] sm:group-hover:md:focus-visible:lg:before:border-dashed'
  )
  expect(
    tw(
      'data-[attribute]:group-hover:md:hover:focus-visible:lg:after:{bg-[blue] text-[2rem]}'
    )
  ).toBe(
    'data-[attribute]:group-hover:md:hover:focus-visible:lg:after:bg-[blue] data-[attribute]:group-hover:md:hover:focus-visible:lg:after:text-[2rem]'
  )
  expect(
    tw(
      'rtl:lg:group-hover:data-[test]:focus-visible:before:{text-[1.25rem] bg-[hsl(180,50%,50%)]}'
    )
  ).toBe(
    'rtl:lg:group-hover:data-[test]:focus-visible:before:text-[1.25rem] rtl:lg:group-hover:data-[test]:focus-visible:before:bg-[hsl(180,50%,50%)]'
  )
  expect(
    tw('sm:group-hover:focus-visible:md:after:{content-["] w-[20px] h-[20px]}')
  ).toBe(
    'sm:group-hover:focus-visible:md:after:content-["] sm:group-hover:focus-visible:md:after:w-[20px] sm:group-hover:focus-visible:md:after:h-[20px]'
  )
  expect(
    tw(
      'data-[test]:group-hover:lg:focus-visible:before:{bg-[gray] border-[1px] rounded-lg}'
    )
  ).toBe(
    'data-[test]:group-hover:lg:focus-visible:before:bg-[gray] data-[test]:group-hover:lg:focus-visible:before:border-[1px] data-[test]:group-hover:lg:focus-visible:before:rounded-lg'
  )
})

test('Test Level: 5', () => {
  expect(
    tw('group-hover:md:focus-visible:lg:before:{border-[2px] border-dotted}')
  ).toBe(
    'group-hover:md:focus-visible:lg:before:border-[2px] group-hover:md:focus-visible:lg:before:border-dotted'
  )
  expect(
    tw(
      'data-[value]:focus-visible:group-hover:md:{bg-[rgb(0,0,0)] text-[0.875rem]}'
    )
  ).toBe(
    'data-[value]:focus-visible:group-hover:md:bg-[rgb(0,0,0)] data-[value]:focus-visible:group-hover:md:text-[0.875rem]'
  )
  expect(
    tw('lg:group-hover:focus-visible:data-[custom]:{p-[2rem] border-[2px]}')
  ).toBe(
    'lg:group-hover:focus-visible:data-[custom]:p-[2rem] lg:group-hover:focus-visible:data-[custom]:border-[2px]'
  )
  expect(
    tw(
      'sm:md:group-hover:lg:focus-visible:data-[attribute]:{bg-[hsl(120,100%,50%)] text-[1.25rem]}'
    )
  ).toBe(
    'sm:md:group-hover:lg:focus-visible:data-[attribute]:bg-[hsl(120,100%,50%)] sm:md:group-hover:lg:focus-visible:data-[attribute]:text-[1.25rem]'
  )
  expect(
    tw(
      'data-[custom]:lg:group-hover:focus-visible:before:{text-[2rem] bg-[linear-gradient(to_right,_#ff0,_#00f)]}'
    )
  ).toBe(
    'data-[custom]:lg:group-hover:focus-visible:before:text-[2rem] data-[custom]:lg:group-hover:focus-visible:before:bg-[linear-gradient(to_right,_#ff0,_#00f)]'
  )
  expect(
    tw('rtl:group-hover:md:focus-visible:before:{border-[3px] border-solid}')
  ).toBe(
    'rtl:group-hover:md:focus-visible:before:border-[3px] rtl:group-hover:md:focus-visible:before:border-solid'
  )
  expect(
    tw('sm:group:hover:md:focus-visible:lg:before:{bg-[purple] text-[0.75rem]}')
  ).toBe(
    'sm:group:hover:md:focus-visible:lg:before:bg-[purple] sm:group:hover:md:focus-visible:lg:before:text-[0.75rem]'
  )
  expect(
    tw(
      'data-[test]:group-hover:focus-visible:lg:before:{border-[4px] border-dotted}'
    )
  ).toBe(
    'data-[test]:group-hover:focus-visible:lg:before:border-[4px] data-[test]:group-hover:focus-visible:lg:before:border-dotted'
  )
  expect(
    tw(
      'lg:group/edit-hover:focus-visible:before:{content-["] h-[20px] w-[20px]}'
    )
  ).toBe(
    'lg:group/edit-hover:focus-visible:before:content-["] lg:group/edit-hover:focus-visible:before:h-[20px] lg:group/edit-hover:focus-visible:before:w-[20px]'
  )
  expect(
    tw(
      "group/data-[custom]:md:focus-[visible]:hover:lg:after:{content-[''] w-[20px] h-[20px]}"
    )
  ).toBe(
    "group/data-[custom]:md:focus-[visible]:hover:lg:after:content-[''] group/data-[custom]:md:focus-[visible]:hover:lg:after:w-[20px] group/data-[custom]:md:focus-[visible]:hover:lg:after:h-[20px]"
  )
  expect(
    tw(
      "group/data-[cus_om]:md:focus-[visible]:hover:lg:after:{content-[''] w-[20px] h-[20px]}"
    )
  ).toBe(
    "group/data-[cus_om]:md:focus-[visible]:hover:lg:after:content-[''] group/data-[cus_om]:md:focus-[visible]:hover:lg:after:w-[20px] group/data-[cus_om]:md:focus-[visible]:hover:lg:after:h-[20px]"
  )
})

test('Test Level: 6', () => {
  expect(tw('[class^=header]:{text-2xl font-bold}')).toBe(
    '[class^=header]:text-2xl [class^=header]:font-bold'
  )
  expect(tw('[data-test=value]:{bg-red-500 text-white}')).toBe(
    '[data-test=value]:bg-red-500 [data-test=value]:text-white'
  )
  expect(tw('[class*=btn]:{hover:bg-blue-500 text-white}')).toBe(
    '[class*=btn]:hover:bg-blue-500 [class*=btn]:text-white'
  )
  expect(tw('[class~=nav]:active:{border-b-2 border-blue-500}')).toBe(
    '[class~=nav]:active:border-b-2 [class~=nav]:active:border-blue-500'
  )
  expect(tw('[class|=btn]:focus:{outline-none ring-2 ring-blue-400}')).toBe(
    '[class|=btn]:focus:outline-none [class|=btn]:focus:ring-2 [class|=btn]:focus:ring-blue-400'
  )
  expect(tw('[data-value=test]:hover:{p-4 border border-gray-300}')).toBe(
    '[data-value=test]:hover:p-4 [data-value=test]:hover:border [data-value=test]:hover:border-gray-300'
  )
  expect(tw('[class*=header]:focus-visible:{bg-gray-200 text-gray-800}')).toBe(
    '[class*=header]:focus-visible:bg-gray-200 [class*=header]:focus-visible:text-gray-800'
  )
  expect(tw('[class^=header-]:hover:{[&>&]:mt-5}')).toBe(
    '[class^=header-]:hover:[&>&]:mt-5'
  )
  expect(tw('[data-attr=value]:{[&>span]:p-3}')).toBe(
    '[data-attr=value]:[&>span]:p-3'
  )
  expect(tw('[data-item=nav]:focus-visible:{[&>ul]:bg-blue-200}')).toBe(
    '[data-item=nav]:focus-visible:[&>ul]:bg-blue-200'
  )
  expect(tw('[class|=btn]:hover:{bg-green-600 text-white}')).toBe(
    '[class|=btn]:hover:bg-green-600 [class|=btn]:hover:text-white'
  )
  expect(tw('[class*=sidebar]:hover:{border-2}')).toBe(
    '[class*=sidebar]:hover:border-2'
  )
  expect(
    tw('[data-type=button]:focus-visible:{[&>span]:text-yellow-500}')
  ).toBe('[data-type=button]:focus-visible:[&>span]:text-yellow-500')
  expect(tw('[class^=header]:hover:{[&>button]:bg-red-500}')).toBe(
    '[class^=header]:hover:[&>button]:bg-red-500'
  )
  expect(tw('[data-value=true]:{bg-green-100 text-black}')).toBe(
    '[data-value=true]:bg-green-100 [data-value=true]:text-black'
  )
  expect(tw('[class~=section]:focus-visible:{[&>h1]:text-xl}')).toBe(
    '[class~=section]:focus-visible:[&>h1]:text-xl'
  )
  expect(tw('[data-custom]:hover:{border-dashed}')).toBe(
    '[data-custom]:hover:border-dashed'
  )
  expect(tw('[data-state=open]:focus-visible:{text-blue-600}')).toBe(
    '[data-state=open]:focus-visible:text-blue-600'
  )
  expect(tw('[class*=card]:hover:{[&>img]:rounded-full}')).toBe(
    '[class*=card]:hover:[&>img]:rounded-full'
  )
  expect(tw('[class~=content]:focus-visible:{[&>section]:border-t-2}')).toBe(
    '[class~=content]:focus-visible:[&>section]:border-t-2'
  )
  expect(tw('[class|=icon]:hover:{text-red-600 transform rotate-45}')).toBe(
    '[class|=icon]:hover:text-red-600 [class|=icon]:hover:transform [class|=icon]:hover:rotate-45'
  )
  expect(
    tw('[data-action=submit]:focus-visible:{[&>button]:bg-gray-800}')
  ).toBe('[data-action=submit]:focus-visible:[&>button]:bg-gray-800')
  expect(tw('[class^=btn]:hover:[class~=nav]:{bg-yellow-200 text-black}')).toBe(
    '[class^=btn]:hover:[class~=nav]:bg-yellow-200 [class^=btn]:hover:[class~=nav]:text-black'
  )
  expect(tw('[data-test=value]:{[class~=item]:hover:bg-blue-500}')).toBe(
    '[data-test=value]:[class~=item]:hover:bg-blue-500'
  )
  expect(tw('[class*=icon]:hover:[&>svg]:{w-8 h-8}')).toBe(
    '[class*=icon]:hover:[&>svg]:w-8 [class*=icon]:hover:[&>svg]:h-8'
  )
  expect(tw('[data-type=card]:focus-visible:{bg-green-300 border-4}')).toBe(
    '[data-type=card]:focus-visible:bg-green-300 [data-type=card]:focus-visible:border-4'
  )
  expect(tw('[class*=section]:hover:{[&>ul>li]:text-red-600}')).toBe(
    '[class*=section]:hover:[&>ul>li]:text-red-600'
  )
  expect(tw('[data-custom]:focus-visible:{border-[3px] border-dotted}')).toBe(
    '[data-custom]:focus-visible:border-[3px] [data-custom]:focus-visible:border-dotted'
  )
})

test('Test Level: 7', () => {
  expect(
    tw('[class*=icon]:hover:{w-8 h-8} [class^=header]:{text-2xl font-bold}')
  ).toBe(
    '[class*=icon]:hover:w-8 [class*=icon]:hover:h-8 [class^=header]:text-2xl [class^=header]:font-bold'
  )
  expect(
    tw(
      '[data-test="value"]:hover:{bg-red-500 text-white} [class~="btn"]:focus:{border-2 border-blue-500}'
    )
  ).toBe(
    '[data-test="value"]:hover:bg-red-500 [data-test="value"]:hover:text-white [class~="btn"]:focus:border-2 [class~="btn"]:focus:border-blue-500'
  )
  expect(
    tw(
      '[data-attr="value"]:{[&>span]:p-3} [class*="nav"]:active:{border-b-2 border-blue-500}'
    )
  ).toBe(
    '[data-attr="value"]:[&>span]:p-3 [class*="nav"]:active:border-b-2 [class*="nav"]:active:border-blue-500'
  )
  expect(
    tw(
      '[data-item="nav"]:focus-visible:{[&>ul]:bg-blue-200} [class|="btn"]:hover:{bg-green-600 text-white}'
    )
  ).toBe(
    '[data-item="nav"]:focus-visible:[&>ul]:bg-blue-200 [class|="btn"]:hover:bg-green-600 [class|="btn"]:hover:text-white'
  )
  expect(
    tw(
      '[class^="header-"]:hover:{[&>&]:mt-5} [class|="icon"]:focus:{text-red-600 transform rotate-45}'
    )
  ).toBe(
    '[class^="header-"]:hover:[&>&]:mt-5 [class|="icon"]:focus:text-red-600 [class|="icon"]:focus:transform [class|="icon"]:focus:rotate-45'
  )
  expect(
    tw(
      '[data-value="true"]:{bg-green-100 text-black} [class*=card]:hover:{[&>img]:rounded-full}'
    )
  ).toBe(
    '[data-value="true"]:bg-green-100 [data-value="true"]:text-black [class*=card]:hover:[&>img]:rounded-full'
  )
  expect(
    tw(
      '[data-state="open"]:focus-visible:{[&>p]:text-blue-600} [class~="content"]:focus-visible:{[&>section]:border-t-2}'
    )
  ).toBe(
    '[data-state="open"]:focus-visible:[&>p]:text-blue-600 [class~="content"]:focus-visible:[&>section]:border-t-2'
  )
  expect(
    tw(
      '[class*="sidebar"]:hover:{border-2} [data-action="submit"]:focus-visible:{[&>button] bg-gray-800}'
    )
  ).toBe(
    '[class*="sidebar"]:hover:border-2 [data-action="submit"]:focus-visible:[&>button] [data-action="submit"]:focus-visible:bg-gray-800'
  )
  expect(
    tw(
      '[data-custom]:hover:{border-dashed} [data-test="value"]:{[class~="item"]:hover:bg-blue-500}'
    )
  ).toBe(
    '[data-custom]:hover:border-dashed [data-test="value"]:[class~="item"]:hover:bg-blue-500'
  )
  expect(
    tw(
      '[class~="nav"]:hover:{[&>ul]:bg-yellow-200} [data-value="test"]:hover:{text-xl font-semibold}'
    )
  ).toBe(
    '[class~="nav"]:hover:[&>ul]:bg-yellow-200 [data-value="test"]:hover:text-xl [data-value="test"]:hover:font-semibold'
  )
  expect(
    tw(
      '[data-attr="value"]:{[&>span]:p-3} [data-item="nav"]:focus-visible:{[&>ul]:bg-blue-200}'
    )
  ).toBe(
    '[data-attr="value"]:[&>span]:p-3 [data-item="nav"]:focus-visible:[&>ul]:bg-blue-200'
  )
  expect(
    tw(
      '[data-test="value"]:hover:{bg-red-500 text-white} [class^="header-"]:focus-visible:{[&>h1]:text-3xl}'
    )
  ).toBe(
    '[data-test="value"]:hover:bg-red-500 [data-test="value"]:hover:text-white [class^="header-"]:focus-visible:[&>h1]:text-3xl'
  )
  expect(
    tw(
      '[class|="btn"]:focus:{outline-none ring-2 ring-blue-400} [data-state="open"]:focus-visible:{[&>p]:text-blue-600}'
    )
  ).toBe(
    '[class|="btn"]:focus:outline-none [class|="btn"]:focus:ring-2 [class|="btn"]:focus:ring-blue-400 [data-state="open"]:focus-visible:[&>p]:text-blue-600'
  )
  expect(
    tw(
      '[class*="btn"]:hover:{[&>span]:text-white} [data-value="test"]:{[class~="item"]:hover:bg-blue-500}'
    )
  ).toBe(
    '[class*="btn"]:hover:[&>span]:text-white [data-value="test"]:[class~="item"]:hover:bg-blue-500'
  )
  expect(
    tw(
      '[data-action="submit"]:focus-visible:{[&>button]:bg-gray-800} [data-item="nav"]:focus-visible:{[&>ul]:bg-blue-200}'
    )
  ).toBe(
    '[data-action="submit"]:focus-visible:[&>button]:bg-gray-800 [data-item="nav"]:focus-visible:[&>ul]:bg-blue-200'
  )
  expect(
    tw(
      '[class~="section"]:focus-visible:{[&>h1]:text-xl} [data-custom]:hover:{border-dashed}'
    )
  ).toBe(
    '[class~="section"]:focus-visible:[&>h1]:text-xl [data-custom]:hover:border-dashed'
  )
  expect(
    tw(
      '[data-state="open"]:focus-visible:{[&>p]:text-blue-600} [class|="icon"]:hover:{text-red-600 transform rotate-45}'
    )
  ).toBe(
    '[data-state="open"]:focus-visible:[&>p]:text-blue-600 [class|="icon"]:hover:text-red-600 [class|="icon"]:hover:transform [class|="icon"]:hover:rotate-45'
  )
  expect(
    tw(
      '[class*=card]:hover:{[&>img]:rounded-full} [data-item="nav"]:focus-visible:{[&>ul]:bg-blue-200}'
    )
  ).toBe(
    '[class*=card]:hover:[&>img]:rounded-full [data-item="nav"]:focus-visible:[&>ul]:bg-blue-200'
  )
  expect(
    tw(
      '[data-test="value"]:{text-xl font-semibold} [class^="header-"]:focus-visible:{[&>h1]:text-3xl}'
    )
  ).toBe(
    '[data-test="value"]:text-xl [data-test="value"]:font-semibold [class^="header-"]:focus-visible:[&>h1]:text-3xl'
  )
  expect(
    tw(
      '[class*="nav"]:active:{border-b-2 border-blue-500} [data-action="submit"]:focus-visible:{[&>button]:bg-gray-800}'
    )
  ).toBe(
    '[class*="nav"]:active:border-b-2 [class*="nav"]:active:border-blue-500 [data-action="submit"]:focus-visible:[&>button]:bg-gray-800'
  )
  expect(
    tw(
      '[data-attr="value"]:{[&>span]:p-3} [data-item="nav"]:focus-visible:{[&>ul]:bg-blue-200} [class|="btn"]:hover:{bg-green-600 text-white}'
    )
  ).toBe(
    '[data-attr="value"]:[&>span]:p-3 [data-item="nav"]:focus-visible:[&>ul]:bg-blue-200 [class|="btn"]:hover:bg-green-600 [class|="btn"]:hover:text-white'
  )
  expect(
    tw(
      '[class~="content"]:focus-visible:{[&>section]:border-t-2} [data-state="open"]:focus-visible:{[&>p]:text-blue-600}'
    )
  ).toBe(
    '[class~="content"]:focus-visible:[&>section]:border-t-2 [data-state="open"]:focus-visible:[&>p]:text-blue-600'
  )
  expect(
    tw(
      '[data-test="value"]:{bg-red-500 text-white} [class^="header"]:hover:{text-2xl font-bold}'
    )
  ).toBe(
    '[data-test="value"]:bg-red-500 [data-test="value"]:text-white [class^="header"]:hover:text-2xl [class^="header"]:hover:font-bold'
  )
  expect(
    tw(
      '[data-custom]:hover:{border-dashed} [data-test="value"]:{[class~="item"]:hover:bg-blue-500} [class*=icon]:focus:{w-8 h-8}'
    )
  ).toBe(
    '[data-custom]:hover:border-dashed [data-test="value"]:[class~="item"]:hover:bg-blue-500 [class*=icon]:focus:w-8 [class*=icon]:focus:h-8'
  )
  expect(
    tw(
      '[class|="icon"]:hover:{text-red-600 transform rotate-45} [data-action="submit"]:focus-visible:{[&>button]:bg-gray-800}'
    )
  ).toBe(
    '[class|="icon"]:hover:text-red-600 [class|="icon"]:hover:transform [class|="icon"]:hover:rotate-45 [data-action="submit"]:focus-visible:[&>button]:bg-gray-800'
  )
  expect(
    tw(
      '[data-value="true"]:{bg-green-100 text-black} [class*="card"]:hover:{[&>img]:rounded-full} [data-item="nav"]:focus-visible:{[&>ul]:bg-blue-200}'
    )
  ).toBe(
    '[data-value="true"]:bg-green-100 [data-value="true"]:text-black [class*="card"]:hover:[&>img]:rounded-full [data-item="nav"]:focus-visible:[&>ul]:bg-blue-200'
  )
  expect(
    tw(
      '[class~="nav"]:focus-visible:{[&>ul]:bg-yellow-200} [data-test="value"]:hover:{text-xl font-semibold}'
    )
  ).toBe(
    '[class~="nav"]:focus-visible:[&>ul]:bg-yellow-200 [data-test="value"]:hover:text-xl [data-test="value"]:hover:font-semibold'
  )
  expect(
    tw(
      '[class*="btn"]:hover:{[&>span]:text-white} [data-attr="value"]:{[class~="item"]:hover:bg-blue-500}'
    )
  ).toBe(
    '[class*="btn"]:hover:[&>span]:text-white [data-attr="value"]:[class~="item"]:hover:bg-blue-500'
  )
  expect(
    tw(
      '[data-state="open"]:focus-visible:{[&>p]:text-blue-600} [class~="section"]:focus-visible:{[&>h1]:text-xl}'
    )
  ).toBe(
    '[data-state="open"]:focus-visible:[&>p]:text-blue-600 [class~="section"]:focus-visible:[&>h1]:text-xl'
  )
  expect(
    tw(
      '[data-action="submit"]:focus-visible:{[&>button]:bg-gray-800} [class*=card]:hover:{[&>img]:rounded-full}'
    )
  ).toBe(
    '[data-action="submit"]:focus-visible:[&>button]:bg-gray-800 [class*=card]:hover:[&>img]:rounded-full'
  )
  expect(
    tw(
      '[class~="content"]:focus-visible:{[&>section]:border-t-2} [class|="btn"]:hover:{bg-green-600 text-white}'
    )
  ).toBe(
    '[class~="content"]:focus-visible:[&>section]:border-t-2 [class|="btn"]:hover:bg-green-600 [class|="btn"]:hover:text-white'
  )
  expect(
    tw(
      '[data-custom]:hover:{border-dashed} [data-test="value"]:{[class~="item"]:hover:bg-blue-500}'
    )
  ).toBe(
    '[data-custom]:hover:border-dashed [data-test="value"]:[class~="item"]:hover:bg-blue-500'
  )
  expect(
    tw(
      '[data-state="open"]:focus-visible:{[&>p]:text-blue-600} [data-value="test"]:{[class~="item"]:hover:bg-blue-500}'
    )
  ).toBe(
    '[data-state="open"]:focus-visible:[&>p]:text-blue-600 [data-value="test"]:[class~="item"]:hover:bg-blue-500'
  )
  expect(
    tw(
      '[class^="header-"]:hover:{[&>&]:mt-5} [data-action="submit"]:focus-visible:{[&>button]:bg-gray-800}'
    )
  ).toBe(
    '[class^="header-"]:hover:[&>&]:mt-5 [data-action="submit"]:focus-visible:[&>button]:bg-gray-800'
  )
  expect(
    tw(
      '[class*=icon]:hover:{w-8 h-8} [data-item="nav"]:focus-visible:{[&>ul]:bg-blue-200}'
    )
  ).toBe(
    '[class*=icon]:hover:w-8 [class*=icon]:hover:h-8 [data-item="nav"]:focus-visible:[&>ul]:bg-blue-200'
  )
  expect(
    tw(
      '[class~="btn"]:focus-visible:{[&>span]:text-yellow-500} [data-state="open"]:focus-visible:{[&>p]:text-blue-600}'
    )
  ).toBe(
    '[class~="btn"]:focus-visible:[&>span]:text-yellow-500 [data-state="open"]:focus-visible:[&>p]:text-blue-600'
  )
  expect(
    tw(
      '[data-test="value"]:{bg-red-500 text-white} [class*=icon]:focus:{w-8 h-8}'
    )
  ).toBe(
    '[data-test="value"]:bg-red-500 [data-test="value"]:text-white [class*=icon]:focus:w-8 [class*=icon]:focus:h-8'
  )
  expect(
    tw(
      '[class|="btn"]:focus:{outline-none ring-2 ring-blue-400} [data-item="nav"]:focus-visible:{[&>ul]:bg-blue-200}'
    )
  ).toBe(
    '[class|="btn"]:focus:outline-none [class|="btn"]:focus:ring-2 [class|="btn"]:focus:ring-blue-400 [data-item="nav"]:focus-visible:[&>ul]:bg-blue-200'
  )
  expect(
    tw(
      '[data-custom]:hover:{border-dashed} [data-value="true"]:{bg-green-100 text-black}'
    )
  ).toBe(
    '[data-custom]:hover:border-dashed [data-value="true"]:bg-green-100 [data-value="true"]:text-black'
  )
  expect(
    tw(
      '[data-test="value"]:{text-xl font-semibold} [data-item="nav"]:focus-visible:{[&>ul]:bg-blue-200}'
    )
  ).toBe(
    '[data-test="value"]:text-xl [data-test="value"]:font-semibold [data-item="nav"]:focus-visible:[&>ul]:bg-blue-200'
  )
  expect(
    tw(
      '[class*=btn]:hover:{[&>span]:text-white} [data-attr="value"]:{[class~="item"]:hover:bg-blue-500}'
    )
  ).toBe(
    '[class*=btn]:hover:[&>span]:text-white [data-attr="value"]:[class~="item"]:hover:bg-blue-500'
  )
  expect(
    tw(
      '[data-state="open"]:focus-visible:{[&>p]:text-blue-600} [class~="section"]:focus-visible:{[&>h1]:text-xl}'
    )
  ).toBe(
    '[data-state="open"]:focus-visible:[&>p]:text-blue-600 [class~="section"]:focus-visible:[&>h1]:text-xl'
  )
  expect(
    tw(
      '[data-action="submit"]:focus-visible:{[&>button]:bg-gray-800} [class*=card]:hover:{[&>img]:rounded-full}'
    )
  ).toBe(
    '[data-action="submit"]:focus-visible:[&>button]:bg-gray-800 [class*=card]:hover:[&>img]:rounded-full'
  )
})
