import tw, { styled } from 'twin.macro'

export const CTASection = styled.section`
  ${tw`bg-bg1 pt-20 pb-24 sm:py-24 `}
`

export const CTAInner = styled.div`
  ${tw`h-full flex flex-col sm:flex-row justify-around items-center`}

  h2 {
    ${tw`text-center sm:text-left sm:self-start`}
  }

  p {
    ${tw`text-center sm:text-left sm:self-start lg:w-1/2 mt-6 text-accent1`}
  }
`
export const GroupButtons = styled.div`
  ${tw`flex flex-col justify-center gap-4 pt-8 mb-2 lg:flex-row`}
`
export const CTAButton = styled.button(() => [
  tw`min-w-[200px] bg-accent1 text-white text-lg font-medium py-3 px-10 shadow-button rounded-md sm:min-w-[230px] hover:bg-white hover:text-accent1 transition duration-300`,
])

export const CTATertiaryHeadingDark = styled.h3(() => [
  tw`text-2xl sm:text-[32px] font-bold text-text-200`,
])

export const CTATertiaryHeadingLight = styled.h3(() => [
  tw`text-2xl sm:text-[32px] font-medium text-text-100`,
])
