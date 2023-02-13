import tw, { styled } from 'twin.macro'

export const AuthWrapperContainer = styled.div`
  ${tw`border-b border-bg2`}
`

export const AuthInner = styled.div`
  ${tw`grid items-center grid-cols-1 justify-items-center gap-y-14 lg:grid-cols-2`}
`
// Form / Column 1
export const AuthFormContainer = styled.form`
  ${tw`w-fit max-w-[600px] grid grid-cols-2 items-center gap-x-4 gap-y-4 sm:gap-y-4 px-6 py-8 border rounded-md border-text-100`}

  // First link
  & > a:nth-of-type(1) {
    ${tw`max-w-[140px] justify-self-end text-end text-link`}
  }

  // Auth links (google, facebook)
  & > a:nth-of-type(2),
  & > a:nth-of-type(3) {
    ${tw`col-span-2 sm:col-span-1`}
  }

  // Sign is as guest button
  & > a:nth-of-type(4) {
    ${tw`col-span-2`}
  }

  // Forgot password link
  & > a:nth-of-type(5) {
    ${tw`col-span-2 pb-5 text-link justify-self-center md:justify-self-end`}
  }

  // Inputs
  div {
    ${tw`col-span-2`}
  }

  div:nth-of-type(1) {
    ${tw`pt-5`}
  }

  div:nth-of-type(3) {
    ${tw`pb-5`}
  }

  // Submit button
  button {
    ${tw`w-full col-span-2`}
  }

  // Span
  & > span {
    ${tw`col-span-2 pt-4 text-center`}

    a {
      ${tw`text-accent2`}
    }
  }
`

// Image / Column 2
export const AuthImage = styled.img`
  ${tw`hidden max-w-[420px] justify-self-end lg:inline-block xl:max-w-none`}
`
