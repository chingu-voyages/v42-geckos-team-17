import tw, { styled } from 'twin.macro'

export const AuthWrapperContainer = styled.div`
  ${tw`py-8 md:py-20`}
`

export const AuthInner = styled.div`
  ${tw`grid items-center grid-cols-1 justify-items-center gap-y-14 lg:grid-cols-2`}
`
// Form / Column 1
export const AuthFormContainer = styled.form`
  ${tw`w-fit max-w-[600px] grid grid-cols-2 sm:grid-cols-[3fr_1fr] items-center gap-x-4 gap-y-4 sm:gap-y-8 px-6 py-10 border rounded-md border-text-100`}

  // First link
  a:nth-of-type(1) {
    ${tw`max-w-[140px] justify-self-end text-end text-link`}
  }

  // Auth links (google, facebook)
  a:nth-of-type(2),
  a:nth-of-type(3) {
    ${tw`col-span-2 sm:col-span-1`}
  }

  // Forgot password link
  a:nth-of-type(4) {
    ${tw`col-span-2 text-link justify-self-center sm:col-span-1 sm:justify-self-end`}
  }

  // Inputs
  div {
    ${tw`col-span-2`}
  }

  div:nth-of-type(1) {
    ${tw`pt-5`}
  }

  div:nth-of-type(2),
  div:nth-of-type(3) {
    ${tw`pb-5`}
  }

  // Submit button
  button {
    ${tw`col-span-2 sm:col-span-1`}
  }

  // Span
  span {
    ${tw`col-span-2 pt-8 text-center`}
  }
`

// Image / Column 2
export const AuthImage = styled.img`
  ${tw`hidden max-w-[350px] justify-self-end lg:inline-block xl:max-w-none`}
`
