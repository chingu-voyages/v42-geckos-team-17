import tw, { styled } from 'twin.macro'
import { Link } from 'react-router-dom'

// Text link
export const TextLink = styled(Link)(({ small, big }) => [
  tw`text-lg capitalize transition duration-300 text-text-100 hover:text-text-200`,

  // Small link
  small && tw`text-sm`,

  // Big link
  big && tw`text-2xl`,
])

export const PrimaryLink = styled(Link)`
  ${tw`flex min-h-[52px] items-center justify-center px-6 py-3 text-lg font-normal text-white transition duration-300 rounded-md gap-x-4 bg-bg4 whitespace-nowrap shadow-button hover:bg-bg3 hover:text-text-200`}

  svg {
    ${tw`shrink-0`}
  }

  svg path {
    ${tw`fill-white`}
  }

  &:hover svg path {
    ${tw`fill-bg4`}
  }
`

export const SecondaryLink = styled(Link)`
  ${tw`flex min-h-[52px] items-center justify-center px-10 py-3 text-lg font-normal text-center transition duration-300 rounded-md gap-x-4 bg-bg3 text-text-200 whitespace-nowrap shadow-button hover:bg-bg4 hover:text-white`}

  svg {
    ${tw`shrink-0`}
  }

  svg path {
    ${tw`fill-bg4`}
  }

  &:hover svg path {
    ${tw`fill-white`}
  }
`

// Icon link
export const IconLink = styled(Link)`
  ${tw`flex items-center p-2 justify-items-center`}

  svg {
    ${tw`transition duration-300 shrink-0 fill-text-200`}
  }

  &:hover svg {
    ${tw`fill-text-100`}
  }
`
