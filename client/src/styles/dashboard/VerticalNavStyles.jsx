import tw, { styled } from 'twin.macro'

export const VerticalNavContainer = styled.header`
  ${tw`fixed bg-bg2 w-[100px] h-screen hidden md:block rounded-tr-3xl rounded-br-3xl`}
`

export const VerticalNavInner = styled.nav`
  ${tw`h-full flex flex-col items-center py-6 px-2.5`}

  // Logo link
  & > a:nth-of-type(1) {
    ${tw`px-5 pt-3 pb-8 border-b`}
  }
`

export const Navigation = styled.ul`
  ${tw`w-full flex flex-col items-center gap-y-8 py-8 px-2.5`}
`

export const VerticalNavInnerFooter = styled.div`
  ${tw`flex flex-col items-center justify-end gap-4 grow`}

  // User button
  & > button {
    ${tw`mb-4`}
  }

  // User link
  & > a {
    ${tw`pt-6 border-t`}
  }
`
