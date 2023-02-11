import tw, { styled } from 'twin.macro'

export const TransactionContainer = styled.div`
  ${tw`flex flex-col`}
`

export const TransactionRow = styled.div`
  ${tw`flex flex-row bg-bg2 my-4 py-1.5 px-4 justify-between items-center`}
`

export const TransactionIcons = styled.div`
  ${tw`flex flex-row gap-3 items-center`}

  svg {
    ${tw`mx-0.5`}
  }
`
