import tw, { styled } from 'twin.macro'

// Primary button
export const PrimaryButton = styled.button(({ small }) => [
  tw`min-w-[200px] bg-accent1 text-white text-lg font-medium py-5 px-10 shadow-button rounded-md sm:min-w-[280px]  hover:bg-white hover:text-accent1 transition duration-300`,
  small && tw`py-3 font-normal min-w-fit sm:min-w-fit`,
])

// Secondary button
export const SecondaryButton = styled.button(({ small }) => [
  tw`min-w-[200px] bg-white text-accent1 text-lg font-medium py-5 px-10 shadow-button rounded-md sm:min-w-[280px]  hover:bg-accent1 hover:text-white transition duration-300`,
  small && tw`py-3 font-normal min-w-fit sm:min-w-fit`,
])

// Icon button
export const IconButton = styled.button`
  ${tw`p-0.5`}

  svg path {
    ${tw`transition duration-300 shrink-0 fill-text-200`}
  }

  &:hover svg path {
    ${tw`transition duration-300 shrink-0 fill-text-100`}
  }
`
