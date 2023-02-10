import tw, { styled } from 'twin.macro'

export const TransactionContainer = styled.div`
  ${tw`flex flex-col`}
`

export const TransactionRow = styled.div`
  ${tw`flex flex-row bg-bg2 my-4 py-1 px-4 h-11 justify-between content-center`}
`

export const TransactionIcons = styled.div`
  ${tw`flex flex-row`}

  svg {
    ${tw`mx-0.5`}
  }
`
