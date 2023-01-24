import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`bg-white font-body`,
  },
  h1: {
    ...tw`text-[70px] font-extrabold text-text-200`,
  },
  h2: {
    ...tw`text-5xl font-bold text-text-200`,
  },
  h3: {
    ...tw`text-[32px] font-medium text-text-200`,
  },
  p: {
    ...tw`text-lg font-normal text-text-100`,
  },
})

export default function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  )
}
