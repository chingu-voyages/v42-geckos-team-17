import tw, { styled } from 'twin.macro'

export const Overlay = styled.div`
  ${tw`fixed top-0 left-0 flex items-center justify-center w-full h-screen sm:py-8 bg-modal`}
`

export const ModalContainer = styled.div`
  ${tw`relative rounded-md h-full min-w-full overflow-x-scroll sm:min-w-[640px] p-8 sm:p-12 pt-16 bg-bg3 flex flex-col gap-2 sm:gap-6`}

  // Close button
  & > button {
    ${tw`absolute top-0 right-0 translate-x-[-50%] translate-y-[50%]`}
  }
`

export const ButtonsContainer = styled.div`
  ${tw`flex gap-5`}

  button {
    ${tw`w-full`}
  }
`

export const FormContainer = styled.form`
  ${tw`flex flex-col gap-5 py-6`}

  // Submit button
  & > button {
    ${tw`mt-4`}
  }
`

export const CardContainer = styled.div`
  ${tw`flex flex-col w-full max-w-[300px] min-h-[150px] justify-between sm:min-w-[450px] sm:min-h-[225px] gap-4 px-3 py-5 sm:py-10 sm:px-8 mx-auto border border-text-200 rounded-md`}

  // Card inputs
  & > div {
    ${tw`w-[75%]`}
  }

  // Amount inputs
  & > div:nth-of-type(2) {
    ${tw`ml-auto`}
  }
`

export const AccountColors = styled.div`
  ${tw`flex flex-col gap-y-2`}
`

export const AccountColorsContainer = styled.div`
  ${tw`grid grid-cols-4 gap-6 sm:flex`}

  // Label
  & > span {
    ${tw`block text-lg`}
  }
`

export const AccountColorButton = styled.button(({ color }) => ({
  display: 'block',
  background: `${color}`,
  width: '35px',
  height: '35px',
  borderRadius: '50%',
}))
