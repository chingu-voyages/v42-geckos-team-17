import tw, { styled } from 'twin.macro'

export const UserStatsContainer = styled.section`
  ${tw``}

  // Span
  span {
    ${tw`text-sm text-text-100 font-medium`}
  }
`
export const UserStatsHeading = styled.div`
  ${tw``}
`

export const ButtonsContainer = styled.div`
  ${tw`my-8 flex gap-4`}
`

export const ChartsContainer = styled.div`
  ${tw`max-h-[400px]`}

  // Charts
  canvas {
    max-height: 400px !important;
    height: auto !important;
    width: 100% !important;
  }
`
