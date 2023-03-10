import tw, { styled, css } from 'twin.macro'

// Website Container
export const Container = styled.div`
  ${tw`h-full max-w-[1170px] mx-auto py-12 sm:py-20 lg:py-24 px-6 md:px-10 xl:px-0`}
`

// Website section's 'h2+p' container style
export const SectionHeadingContainer = styled.div(({ center, full }) => [
  tw`flex flex-col items-center text-center gap-y-5 md:items-start md:text-start`,

  css`
    p {
      ${tw`md:max-w-[540px]`}
    }
  `,

  full &&
    css`
      p {
        ${tw`md:max-w-none`}
      }
    `,

  // Centered
  center && tw`mx-auto md:items-center md:text-center`,
])

// Webapp Container
export const DashboardContainer = styled.div`
  ${tw`flex`}

  main {
    ${tw`grow mx-auto pt-[80px] pb-[90px] sm:pb-[115px] p-6 max-w-[1000px] sm:pt-[125px] md:pb-[45px] md:pl-[124px] md:pt-[90px]`}
  }
`
