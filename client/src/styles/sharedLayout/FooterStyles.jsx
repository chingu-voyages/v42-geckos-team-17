import tw, { styled } from 'twin.macro'

// Footer container
export const FooterContainer = styled.footer`
  ${tw`bg-bg3 pt-[120px] pb-[80px] px-6 md:px-10`}
`
// Footer Inner
export const FooterInner = styled.div`
  ${tw`max-w-[1170px] mx-auto grid grid-cols-1 gap-y-14 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr_2fr] lg:gap-y-6`}
`
// Logo and Social links / Column 1
export const Social = styled.div`
  ${tw`flex flex-col items-center justify-center gap-y-14 sm:justify-between md:items-start`}
`
// Social links
export const SocialLinks = styled.div`
  ${tw`flex gap-x-4`}

  // Remove left padding from the first link
  & > a {
    ${tw`pl-0`}
  }
`

// Navigation links / Column 2
export const Navigation = styled.nav`
  ${tw`flex flex-col items-center gap-10 text-center justify-evenly sm:flex-row sm:items-start sm:text-left lg:justify-center`}

  // Page title
  span {
    ${tw`block mb-6 text-sm font-bold text-text-200`}
  }

  // Links list
  ul {
    ${tw`flex flex-col gap-y-4`}
  }
`
// Subscribtion form / Column 3
export const SubscribeForm = styled.form`
  ${tw`flex flex-col justify-center gap-y-6 gap-x-2.5 col-span-1 sm:flex-row sm:items-start md:col-span-2 lg:col-span-1 lg:justify-self-end`}
`

// Copyright / Column 4
export const Copyrights = styled.span`
  ${tw`col-span-1 col-start-1 text-xs text-text-100 justify-self-center md:col-span-2 lg:col-start-3 lg:justify-self-end`}
`
