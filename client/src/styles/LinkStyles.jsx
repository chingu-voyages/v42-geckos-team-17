import tw, { styled } from 'twin.macro'
import { Link } from 'react-router-dom'

// Text link
export const TextLink = styled(Link)(({ small }) => [
  tw`text-text-100 text-lg hover:text-text-200 transition duration-300`,

  // Small link
  small && tw`text-sm`,
])

// Icon link
