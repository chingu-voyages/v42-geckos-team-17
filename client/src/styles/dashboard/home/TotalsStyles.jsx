import tw, { styled } from 'twin.macro'

export const TotalsContainer = styled.section`
  ${tw`mb-8`}
`

export const TotalsList = styled.div`
  ${tw`py-3 scrollbar-thin scrollbar-thumb-text-100 scrollbar-track-bg5 scrollbar-track-rounded-md scrollbar-thumb-rounded-md overflow-x-scroll snap-x snap-mandatory flex gap-6`}
`

export const TotalItemContainer = styled.div`
  ${tw`shrink-0 snap-center h-[150px] w-full max-w-[300px] sm:w-[300px] border border-bg4 rounded-md p-4 flex flex-col mb-4`}
`

export const TotalAmount = styled.span`
  ${tw`flex-1 flex justify-center items-center text-3xl font-medium`}
`

export const ButtonsContainer = styled.div`
  ${tw`flex justify-center gap-1 mt-3 sm:hidden`}
`

export const RoundButton = styled.div`
  ${tw`inline w-4 h-4 transition delay-300 rounded-full bg-bg3 shadow-button`}

  ${({ isActive }) => isActive && tw`bg-bg4`}
`
