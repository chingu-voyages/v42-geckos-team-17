import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`bg-white font-body`,
  },
  header: {
    ...tw`py-4`,
  },
  h1: {
    ...tw`text-5xl leading-[60px] sm:text-[64px] md:text-[70px] font-extrabold text-text-200`,
  },
  h2: {
    ...tw`text-3xl leading-[30px] sm:text-4xl sm:leading-[60px] md:text-5xl font-bold text-text-200`,
  },
  h3: {
    ...tw`text-2xl sm:text-[32px] font-medium text-text-200`,
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
