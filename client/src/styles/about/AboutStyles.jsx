import tw, { styled } from 'twin.macro'

export const AboutContainer = styled.section`
  ${tw`bg-bg3`}
`

export const DetailAndImageContainer = styled.div`
  ${tw`grid items-center grid-cols-1 md:grid-cols-[3fr_1fr] lg:grid-cols-[2fr_1fr] gap-x-10 lg:gap-x-16 gap-y-10`}

  p > a {
    ${tw`text-accent2`}
  }
`

export const ImageContainer = styled.div`
  ${tw`rounded-md justify-self-center lg:order-last sm:px-12 md:px-0`}
  & > img {
    ${tw`max-w-[300px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px]`}
  }
`
