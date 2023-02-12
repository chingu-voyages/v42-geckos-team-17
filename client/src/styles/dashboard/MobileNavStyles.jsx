import tw, { styled } from 'twin.macro'

export const TopMobileNavContainer = styled.header`
  ${tw`fixed top-0 block w-screen px-6 py-0 sm:py-2 bg-bg5 md:hidden sm:px-10 rounded-b-3xl`}
`

export const TopMobileNavInner = styled.nav`
  ${tw`flex items-center justify-between`}

  // Logo Link
  & > a:nth-of-type(1) > svg {
    ${tw`sm:w-[58.5px] sm:h-[36px]`}
  }

  // Image
  & > a > img {
    ${tw`w-9 h-9 sm:w-[60px] sm:h-[60px] rounded-full`}
  }
`

export const BottomMobileNavContainer = styled.div`
  ${tw`fixed bottom-0 block w-screen px-6 py-2 sm:py-4 bg-bg5 md:hidden sm:px-10 rounded-t-3xl `}
`

export const Navigation = styled.ul`
  ${tw`relative flex justify-between sm:justify-evenly`}

  // Links icons
  & > li > a > svg {
    ${tw`w-6 h-6 sm:w-8 sm:h-8`}
  }

  // 2nd and 3nd links
  & > li:nth-of-type(2) > a {
    ${tw`mr-10 sm:mr-12`}
  }
  & > li:nth-of-type(3) > a {
    ${tw`ml-10 sm:ml-16`}
  }
`
export const AddButton = styled.button`
  ${tw`absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-25%] inline-block p-3 sm:p-4 rounded-full bg-gradient-to-r from-accent1 to-accent2`}

  // Icons
  & > svg {
    ${tw`w-10 h-10 fill-bg3`}
  }
`
