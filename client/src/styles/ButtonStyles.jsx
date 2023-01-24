import tw, { styled } from 'twin.macro'

// Primary button
export const PrimaryButton = styled.button(({ small }) => [
  tw`bg-accent1 text-white text-lg font-medium min-w-[280px] py-5 px-10 shadow-button hover:bg-white hover:text-accent1 transition duration-300`,
  small && tw`font-normal min-w-fit py-3`,
])

// Secondary button
export const SecondaryButton = styled.button(({ small }) => [
  tw`bg-white text-accent1 text-lg font-medium min-w-[280px] py-5 px-10 shadow-button hover:bg-accent1 hover:text-white transition duration-300`,
  small && tw`font-normal min-w-fit py-3`,
])
