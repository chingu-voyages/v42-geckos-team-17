import tw, { styled } from 'twin.macro'

export const FAQSection = styled.section`
  ${tw`py-12 bg-bg2 h-fit md:py-20`}
`

export const FAQInner = styled.div`
  ${tw`flex flex-col items-center h-fit gap-y-6`}
`

export const FAQGrid = styled.div`
  ${tw`grid w-full grid-cols-1 gap-2 justify-items-center`}
`

export const FAQDiv = styled.div`
  ${tw`flex flex-col justify-center cursor-pointer md:justify-between border-2 bg-white rounded-md min-h-[80px] p-4 h-fit w-full lg:w-[800px] border-accent1`}

  ${({ isOpen }) =>
    isOpen &&
    `svg {
      transform: rotate(180deg);
    }
    `}
`

export const QuestionDiv = styled.div`
  p {
    ${tw`font-semibold text-left w-fit`}
  }
  svg {
    ${tw`w-[38px] h-[35px] ml-auto mr-0 my-auto`}
  }
`

export const AnswerDiv = styled.div`
  p {
    ${tw`mt-4 text-left`}
  }
`
