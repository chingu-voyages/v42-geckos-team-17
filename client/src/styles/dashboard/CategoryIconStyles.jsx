import tw, { styled } from 'twin.macro'

export const CategoryIconContainer = styled.div(({ color }) => ({
  backgroundColor: `${color}`,
  width: '35px',
  height: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
}))

export const IconContainer = styled.div`
  svg {
    ${tw`!h-5 !w-5 !stroke-white`}
  }
`
