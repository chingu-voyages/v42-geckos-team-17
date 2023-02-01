import tw, { styled } from 'twin.macro'
import { Link } from 'react-router-dom'

// Text link
export const TextLink = styled(Link)(({ small }) => [
  tw`text-lg transition duration-300 text-text-100 hover:text-text-200`,

  // Small link
  small && tw`text-sm`,
])

export const SolidLink = styled(Link)`
  ${tw`flex min-h-[52px] items-center justify-center px-6 py-3 text-lg font-normal text-white transition duration-300 rounded-md gap-x-4 bg-accent1 whitespace-nowrap shadow-button hover:bg-white hover:text-accent1`}

  svg {
    ${tw`shrink-0`}
  }

  svg path {
    ${tw`fill-white`}
  }

  &:hover svg path {
    ${tw`fill-accent1`}
  }
`

export const OutlineLink = styled(Link)`
  ${tw`px-10 py-3 text-lg font-normal transition duration-300 bg-white rounded-md text-accent1 whitespace-nowrap shadow-button hover:bg-accent1 hover:text-white`}
`

// Icon link
export const IconLink = styled(Link)`
  ${tw`flex items-center p-2 justify-items-center`}
  &:hover svg path {
    ${tw`transition duration-300 shrink-0 fill-text-200 hover:fill-text-100`}
  }
`
