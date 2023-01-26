import tw, { styled } from 'twin.macro'

// Primary button
export const PrimaryButton = styled.button(({ small }) => [
  tw`min-w-[200px] bg-accent1 text-white text-lg font-medium py-5 px-10 shadow-button sm:min-w-[280px]  hover:bg-white hover:text-accent1 transition duration-300`,
  small && tw`font-normal min-w-fit py-3`,
])

// Secondary button
export const SecondaryButton = styled.button(({ small }) => [
  tw`min-w-[200px] bg-white text-accent1 text-lg font-medium py-5 px-10 shadow-button sm:min-w-[280px]  hover:bg-accent1 hover:text-white transition duration-300`,
  small && tw`font-normal min-w-fit py-3`,
])

// Icon button
export const IconButton = styled.button`
  ${tw`p-0.5`}
  &:hover svg path {
    ${tw`fill-text-200 hover:fill-text-100 transition duration-300`}
  }
`
