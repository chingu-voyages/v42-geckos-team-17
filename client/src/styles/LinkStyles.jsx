import tw, { styled } from 'twin.macro'
import { Link } from 'react-router-dom'

// Text link
export const TextLink = styled(Link)(({ small }) => [
  tw`text-text-100 text-lg hover:text-text-200 transition duration-300`,

  // Small link
  small && tw`text-sm`,
])

export const OutlineLink = styled(Link)`
  ${tw`bg-white text-accent1 text-lg font-normal whitespace-nowrap py-3 px-10 shadow-button hover:bg-accent1 hover:text-white transition duration-300`}
`

// Icon link
export const IconLink = styled(Link)`
  ${tw`p-0.5`}
  &:hover svg path {
    ${tw`fill-text-200 hover:fill-text-100 transition duration-300`}
  }
`
