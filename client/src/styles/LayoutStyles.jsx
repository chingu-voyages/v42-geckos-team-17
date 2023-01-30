import tw, { styled } from 'twin.macro'

export const Container = styled.div`
  ${tw`h-full max-w-[1170px] mx-auto px-6 md:px-10 xl:px-0`}
`

// Website section's 'h2+p' container style
export const SectionHeadingContainer = styled.div(({ center }) => [
  tw`flex flex-col items-center text-center gap-y-[18px] lg:max-w-[540px] md:items-start md:text-start`,

  // Centered
  center && tw`mx-auto md:items-center md:text-center`,
])
