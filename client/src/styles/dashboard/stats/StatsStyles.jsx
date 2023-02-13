import tw, { styled } from 'twin.macro'

export const StatsContainer = styled.section`
  ${tw`flex flex-col gap-4`}
`

export const ChartContainer = styled.div`
  ${tw`max-h-screen h-[600px] sm:max-h-[600px] flex justify-center`}

  .vertical {
    ${tw`!hidden  sm:!block`}
  }

  .horizontal {
    ${tw`h-full w-full !block sm:!hidden`}
  }
`

export const ButtonsContainer = styled.div`
  ${tw`flex flex-col justify-start gap-4 my-2 sm:flex-row`}

  button {
    ${tw`w-full`}
  }
`
