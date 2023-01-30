import tw, { styled } from 'twin.macro'

export const FeaturesSection = styled.section`
  ${tw`bg-bg1 h-[1600px] md:h-[966px] lg:h-[800px] py-12 md:py-20`}
`
export const FeaturesInner = styled.div`
  ${tw`flex flex-col h-full gap-y-4`}
`

export const FeaturesGrid = styled.div`
  ${tw`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6 max-h-[400px]`}

  div:nth-child(1) {
    ${tw`col-span-2 row-span-2 h-[400px]`}
  }
  div:nth-child(4) {
    ${tw`col-span-2`}
  }
  div:nth-child(5) {
    ${tw`col-span-2`}
  }
  div:nth-child(6) {
    ${tw`col-span-2`}
  }
`

export const GridDiv = styled.div`
  ${tw`flex flex-col justify-between h-48 p-2 transition duration-300 border-2 rounded cursor-pointer border-accent1 hover:bg-accent1`}

  svg {
    ${tw`ml-auto`}
  }

  &:hover {
    svg {
      circle {
        ${tw`fill-bg1`}
      }
    }

    h3 {
      ${tw`text-bg1`}
    }
  }
`
