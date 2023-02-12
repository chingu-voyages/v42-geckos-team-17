import tw, { styled } from 'twin.macro'

export const TransactionContainer = styled.div`
  ${tw`flex flex-col gap-3`}
`

export const TransactionRow = styled.div`
  ${tw`flex flex-row bg-bg5 py-1.5 px-4 justify-between items-center`}
`

export const TransactionIcons = styled.div`
  ${tw`flex flex-row items-center gap-3`}

  svg {
    ${tw`mx-0.5`}
  }
`
