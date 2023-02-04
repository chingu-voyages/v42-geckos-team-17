import tw, { styled } from 'twin.macro'

export const AboutContainer = styled.section`
  ${tw`bg-bg2 py-12 sm:py-20 lg:py-24 `}
`

export const DetailAndImageContainer = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10`}
`

export const ImageContainer = styled.div`
  ${tw`rounded-md sm:px-12 md:px-0 `}
  img {
    ${tw`sm:h-96 object-cover w-full rounded-md`}
  }
`
