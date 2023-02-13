import tw, { styled } from 'twin.macro'

export const UserStatsContainer = styled.section`
  ${tw`py-1`}

  // Span
  span {
    ${tw`text-sm font-medium text-text-100`}
  }
`

export const ButtonsContainer = styled.div`
  ${tw`flex flex-col sm:flex-row justify-start gap-4 my-3`}

  button {
    ${tw`w-full`}
  }
`

export const ChartsContainer = styled.div`
  ${tw`min-h-[600px] sm:min-h-fit sm:max-h-[400px] my-6`}

  .vertical {
    ${tw`!hidden  sm:!block`}
  }

  .horizontal {
    ${tw`h-full w-full !block sm:!hidden`}
  }
`

export const DoughnutChartContainer = styled.div`
  ${tw`h-full py-8 px-4 grid grid-cols-1 sm:grid-cols-2 gap-14 items-center`}

  .doughnut {
    ${tw`w-full justify-self-center max-w-[400px]`}
  }
`

export const DoughnutLegend = styled.ul`
  ${tw`flex flex-col gap-4`}

  // Expense item
  li {
    ${tw`flex items-center gap-4`}
  }

  // Expense title and percent
  & > li > div {
    ${tw`flex flex-col`}

    span:nth-of-type(1) {
      ${tw`capitalize text-text-200`}
    }
  }

  // Expense price
  & > li > span {
    ${tw`flex-1 text-end text-text-200`}
  }
`
