import tw, { styled } from 'twin.macro'

export const PricePlansSection = styled.section`
  ${tw`bg-bg3 h-fit`}
`

export const PricePlansInner = styled.div`
  ${tw`grid gap-4 h-fit lg:gap-0 md:grid-cols-2 lg:grid-cols-4 `}

  div:nth-child(1) {
    ${tw`lg:border-r-0`}
  }
  div:nth-child(2) {
    ${tw`lg:border-r-0`}
  }
  div:nth-child(3) {
    ${tw`lg:border-r-0`}
  }
`

export const PricePlanCardDiv = styled.div`
  ${tw`relative flex flex-col w-full h-full gap-4 px-6 py-20 border min-w-fit border-bg4`}

  p {
    ${tw`text-text-200`}
  }
`

export const CardHeaderDiv = styled.div`
  ${tw`flex flex-col w-full gap-4 text-center min-h-fit md:text-left`}

  h3 {
    ${tw`font-bold`}
  }
`

export const CardBodyDiv = styled.div`
  ${tw`w-full text-center md:mt-6 h-52 md:text-left`}

  button {
    ${tw`h-12 min-w-full py-0 mt-10 mb-2`}
  }
`

export const CardFooterDiv = styled.div`
  ${tw`flex flex-col w-full gap-2 md:mt-6 h-fit`}

  div {
    ${tw`flex gap-2 text-lg font-normal`}
    svg {
      ${tw`shrink-0`}
    }
  }
`

export const BestValueDiv = styled.div`
  ${tw`absolute top-0 right-0 w-full py-2.5 text-lg text-center bg-bg4 text-white h-14`}
`
