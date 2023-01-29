import tw, { styled } from 'twin.macro'

export const HeroSection = styled.section`
  ${tw`bg-bg2 h-[600px] lg:h-[700px]`}
`
export const HeroInner = styled.div`
  ${tw`flex flex-col items-center justify-center h-full gap-y-4`}

  // Heading
  h1 {
    ${tw`text-center`}
  }

  // Paragraph
  p {
    ${tw`hidden max-w-[540px] sm:block lg:text-xl text-center`}
  }

  // Button
  button {
    ${tw`mt-12`}
  }
`
