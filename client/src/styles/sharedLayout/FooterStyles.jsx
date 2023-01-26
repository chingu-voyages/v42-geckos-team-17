import tw, { styled } from 'twin.macro'

export const FooterContainer = styled.footer`
  ${tw`bg-bg2 py-[120px] px-6 md:px-10`}
`
export const FooterInner = styled.div`
  ${tw`max-w-[1170px] mx-auto grid grid-cols-1 gap-y-14 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr_2fr] lg:gap-x-14 lg:gap-y-6`}
`
// Column 1
export const Social = styled.div`
  ${tw`flex flex-col gap-y-14 justify-center items-center sm:justify-between lg:items-start`}
`

export const SocialLinks = styled.div`
  ${tw`flex gap-x-4`}
`

// Column 2
export const Navigation = styled.nav`
  ${tw`flex flex-col items-center text-center justify-center gap-10 sm:flex-row sm:items-start sm:text-left`}

  // Page title
  span {
    ${tw`block text-text-200 text-sm font-bold mb-6`}
  }

  // Links list
  ul {
    ${tw`flex flex-col gap-y-4`}
  }
`
// Column 3
export const SubscribeForm = styled.form`
  ${tw`flex flex-col gap-2.5 col-span-1 justify-center sm:flex-row sm:items-start md:col-span-2 lg:col-span-1`}

  // TODO: move form groups to separate style file

  // Input
  input {
    ${tw`w-full font-normal border-2 border-accent1 px-4 py-3 sm:w-[300px] lg:w-[200px]`}
  }
`

// Copyright / Column 4
export const Copyrights = styled.span`
  ${tw`text-xs text-text-100 col-span-1 col-start-1 justify-self-center md:col-span-2 lg:col-start-3 lg:justify-self-end`}
`
