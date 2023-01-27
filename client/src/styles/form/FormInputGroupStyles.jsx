import tw, { styled } from 'twin.macro'

export const FormInputGroupContainer = styled.div`
  ${tw`flex flex-col gap-y-2`}

  // Label
  label {
    ${tw`text-lg`}
  }

  // Input
  input {
    ${tw`w-full border border-text-100 rounded-md px-4 py-3 font-normal`}
  }

  input:focus {
    ${tw`border border-accent1`}
  }
`
