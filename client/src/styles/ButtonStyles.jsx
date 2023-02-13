import tw, { styled } from 'twin.macro'

// Primary button
export const PrimaryButton = styled.button(({ small }) => [
  tw`min-w-[200px] bg-bg4 text-white text-lg font-medium py-5 px-10 shadow-button rounded-md sm:min-w-[280px] hover:bg-bg3 hover:text-text-200 transition duration-300`,
  small && tw`py-3 font-normal min-w-fit sm:min-w-fit`,
])

// Secondary button
export const SecondaryButton = styled.button(({ small, active }) => [
  tw`min-w-[200px] bg-bg3 text-text-200 text-lg whitespace-nowrap font-medium py-5 px-10 shadow-button rounded-md sm:min-w-[280px] hover:bg-bg4 hover:text-white transition duration-300`,
  small && tw`py-3 font-normal min-w-fit sm:min-w-fit`,
  active && tw`text-white bg-bg4`,
])

// Icon button
export const IconButton = styled.button`
  ${tw`p-0.5`}

  svg path {
    ${tw`transition duration-300 shrink-0 fill-bg4`}
  }

  &:hover svg path {
    ${tw`transition duration-300 shrink-0 fill-bg4`}
  }
`
