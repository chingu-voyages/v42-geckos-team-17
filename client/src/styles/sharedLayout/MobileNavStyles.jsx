import tw, { styled } from 'twin.macro'

export const Overlay = styled.div`
  ${tw`fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-bg3`}
`
export const MobileNavInner = styled.nav`
  ${tw`flex flex-col items-center gap-10 pt-8`}
`

export const NavigationLinks = styled.ul`
  ${tw`flex flex-col items-center gap-8 pb-10`}
`

export const SocialLinks = styled.ul`
  ${tw`flex gap-4`}
`
