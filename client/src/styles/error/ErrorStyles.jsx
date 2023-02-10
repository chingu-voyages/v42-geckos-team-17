import tw, { styled } from 'twin.macro'

export const ErrorContainer = styled.div`
  ${tw`py-12 sm:py-20 lg:py-24`}
`

export const ErrorInner = styled.div`
  ${tw`flex flex-col items-center gap-6`}

  // Image
  & > img {
    ${tw`max-h-[400px] pt-6 sm:p-2`}
  }
`
