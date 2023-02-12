import tw, { styled } from 'twin.macro'

export const FeaturesSection = styled.section`
  ${tw`bg-bg3`}
`
export const FeaturesInner = styled.div`
  ${tw`flex flex-col h-full gap-y-4`}
`

export const FeaturesGrid = styled.div`
  ${tw`grid grid-cols-2 gap-4 mt-6 md:grid-cols-4 lg:grid-cols-6`}

  div:nth-child(1) {
    ${tw`col-span-2 row-span-2 md:h-[400px]`}
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
  ${tw`flex flex-col justify-between h-48 p-2 transition duration-300 border rounded cursor-pointer border-bg4 hover:bg-gradient-to-r hover:bg-bg4`}

  svg {
    ${tw`ml-auto`}
    circle {
      ${tw`fill-bg4`}
    }
  }

  &:hover {
    svg {
      circle {
        ${tw`fill-bg3`}
      }
    }

    h3 {
      ${tw`text-white`}
    }
  }
`
