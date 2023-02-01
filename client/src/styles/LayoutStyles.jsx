import tw, { styled, css } from 'twin.macro'

// Website Container
export const Container = styled.div`
  ${tw`h-full max-w-[1170px] mx-auto px-6 md:px-10 xl:px-0`}
`

// Website section's 'h2+p' container style
export const SectionHeadingContainer = styled.div(({ center }) => [
  tw`flex flex-col items-center text-center gap-y-5 md:items-start md:text-start`,

  css`
    p {
      ${tw`md:max-w-[540px]`}
    }
  `,

  // Centered
  center && tw`mx-auto md:items-center md:text-center`,
])

// Webapp Container
export const DashboardContainer = styled.div`
  ${tw`flex`}

  main {
    ${tw`grow mx-auto pt-[90px] pb-[45px] p-6 max-w-[1000px] md:pl-[124px]`}
  }
`
