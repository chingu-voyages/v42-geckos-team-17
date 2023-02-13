import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`bg-bg3 font-body scrollbar-thin scrollbar-thumb-text-100 scrollbar-track-bg5 scrollbar-track-rounded-md scrollbar-thumb-rounded-md`,
  },

  main: {
    ...tw`overflow-hidden`,
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
