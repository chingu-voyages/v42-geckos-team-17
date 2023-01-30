import tw, { styled } from 'twin.macro'

export const FormInputGroupContainer = styled.div`
  ${tw`relative flex flex-col gap-y-2`}

  // Label
  label {
    ${tw`text-lg`}
  }

  // Input
  input {
    ${tw`w-full px-4 py-3 font-normal border rounded-md border-text-100`}
  }

  input:focus {
    ${tw`border border-accent1`}
  }

  // Error span
  span {
    ${tw`absolute bottom-0 left-0 px-1 text-xs translate-y-5 text-error`}
  }
`
