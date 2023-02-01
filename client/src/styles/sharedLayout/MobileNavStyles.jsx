import tw, { styled } from 'twin.macro'

export const Overlay = styled.div`
  ${tw`fixed top-0 left-0 flex justify-center items-center h-screen w-full bg-bg1`}
`
export const MobileNavInner = styled.nav`
  ${tw`flex flex-col gap-10 items-center`}
`

export const NavigationLinks = styled.ul`
  ${tw`flex flex-col items-center gap-6 pb-10`}
`

export const SocialLinks = styled.ul`
  ${tw`flex gap-4`}
`
