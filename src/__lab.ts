console.clear()
import tw from '.'

function test(fb: Function) {
  console.time('tw')
  for (let i = 0; i < 1_000_000; i++) fb()
  console.timeEnd('tw')
}

test(() => {
  tw("")
})

test(() => {
  tw(
    "group/data-[custom]:md:focus-[visible]:hover:lg:after:{content-[''] w-[20px] h-[20px]}"
  )
})

test(() => {
  tw("after:{content-[''] w-[20px] h-[20px]}")
})
