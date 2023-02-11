import tw, { styled } from 'twin.macro'

export const HeroSection = styled.section`
  ${tw`bg-gradient-to-r from-bg1 to-bg2 h-[600px] lg:h-[700px]`}
`
export const HeroInner = styled.div`
  ${tw`flex flex-col items-center justify-center h-full gap-y-4`}

  // Heading
  h1 {
    ${tw`text-center`}

    // First word
    & > span {
      ${tw`text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2`}
    }
  }

  // Paragraph
  p {
    ${tw`max-w-[540px] lg:text-xl text-center`}
  }

  // Button
  button {
    ${tw`mt-12`}
  }
`
