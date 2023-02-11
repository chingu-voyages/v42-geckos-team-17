import tw, { styled } from 'twin.macro'

export const FAQSection = styled.section`
  ${tw`bg-bg3 h-fit`}
`

export const FAQInner = styled.div`
  ${tw`flex flex-col items-center h-fit gap-y-8`}
`

export const FAQGrid = styled.div`
  ${tw`grid w-full grid-cols-1 gap-2 justify-items-center`}
`

export const FAQDiv = styled.div`
  ${tw`flex flex-col justify-center cursor-pointer md:justify-between border border-bg4 bg-bg3 rounded-md min-h-[80px] p-4 h-fit w-full lg:w-[800px]`}

  ${({ isOpen }) =>
    isOpen &&
    `svg {
      transform: rotate(180deg);
    }
    `}
`

export const QuestionDiv = styled.div`
  p {
    ${tw`font-semibold text-left text-text-200 w-fit`}
  }
  svg {
    ${tw`w-[38px] h-[35px] ml-auto mr-0 my-auto origin-center`}

    path {
      ${tw`stroke-bg4`}
    }
  }
`

export const AnswerDiv = styled.div`
  p {
    ${tw`mt-4 text-left`}
  }
`
