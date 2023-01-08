import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`bg-amber-50`,
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
