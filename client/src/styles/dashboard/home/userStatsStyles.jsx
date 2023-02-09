import tw, { styled } from 'twin.macro'

export const UserStatsContainer = styled.section`
  ${tw``}

  // Span
  span {
    ${tw`text-sm text-text-100 font-medium`}
  }
`

export const ButtonsContainer = styled.div`
  ${tw`my-8 flex gap-4 justify-start`}
`

export const ChartsContainer = styled.div`
  ${tw`max-h-screen sm:max-h-[400px]`}

  .vertical {
    ${tw`!hidden  sm:!block`}
  }

  .horizontal {
    ${tw`h-[500px] w-full !block sm:!hidden`}
  }
`
