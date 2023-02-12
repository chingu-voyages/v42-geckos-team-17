import tw, { styled } from 'twin.macro'

export const DashboardProfileContainer = styled.div`
  ${tw`flex flex-col gap-4`}
`

export const ProfileFormContainer = styled.form`
  ${tw`grid grid-cols-1 gap-10 items-center sm:grid-cols-[200px_1fr]`}

  // User image
  &> img {
    ${tw`w-40 h-40 rounded-full justify-self-center`}
  }

  // Buttons
  & > button {
    ${tw`col-span-1 sm:col-span-2`}
  }
`

export const ProfileFormInputs = styled.div`
  ${tw`flex flex-col gap-5`}
`
