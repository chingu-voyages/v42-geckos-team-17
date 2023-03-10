import tw, { styled } from 'twin.macro'

export const FormCheckGroupContainer = styled.div`
  ${tw`flex align-top gap-x-5`}

  // Input
  input {
    ${tw`w-6 h-6 border border-text-100`}
  }

  // Label
  label {
    ${tw`text-base font-medium text-text-100`}
  }
`
