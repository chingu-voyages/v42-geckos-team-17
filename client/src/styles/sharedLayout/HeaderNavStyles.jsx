import tw, { styled } from 'twin.macro'

export const Navigation = styled.nav`
  ${tw`max-w-[1360px] min-h-[64px] mx-auto flex justify-between items-center gap-x-10 px-6 md:px-10`}

  // Hide 'Sign in' link for medium&small screens
  a:last-of-type {
    ${tw`hidden md:inline-block`}
  }

  // Hide 'Hamburger' button for larger screens
  button {
    ${tw`inline-block md:hidden`}
  }
`

export const NavigationLinks = styled.ul`
  ${tw`gap-x-8 hidden md:flex md:w-full md:justify-end`}
`
