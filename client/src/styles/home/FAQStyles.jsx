import tw, { styled } from 'twin.macro'

export const FAQSection = styled.section`
  ${tw`py-12 bg-bg2 h-fit md:py-20`}
`

export const FAQInner = styled.div`
  ${tw`flex flex-col items-center h-fit gap-y-6`}

  // Heading
  h1 {
    ${tw`text-5xl text-center `}
  }

  // Paragraph
  p {
    ${tw`lg:max-w-[540px] block text-xl text-center `}
  }
`

export const FAQGrid = styled.div`
  ${tw`grid grid-cols-1 gap-2`}
`

export const FAQDiv = styled.div`
  ${tw`flex flex-col md:justify-between border-2 rounded min-h-[80px] p-4 h-fit w-[342px] md:w-[754px] lg:w-[800px] border-accent1`}

  ${({ isOpen }) =>
    isOpen &&
    `svg {
      transform: rotate(180deg);
    }
    `}
`

export const QuestionDiv = styled.div`
  p {
    ${tw`font-semibold text-left w-fit text-text-200`}
  }
  svg {
    ${tw`w-[38px] h-[35px] ml-auto mr-0 my-auto`}
  }
`

export const AnswerDiv = styled.div`
  p {
    ${tw`mt-4 text-xl font-normal text-left text-text-200`}
  }
`
