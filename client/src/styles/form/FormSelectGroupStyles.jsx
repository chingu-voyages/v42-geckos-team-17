import tw, { styled } from 'twin.macro'

export const FormSelectGroupContainer = styled.div`
  ${tw`flex flex-col gap-y-2`}

  // Label
  label {
    ${tw`text-lg`}
  }

  // Select
  select {
    ${tw`w-fit flex border border-text-100 rounded-md px-4 py-3 font-normal`}
  }

  select:focus {
    ${tw`border border-accent1`}
  }
`
