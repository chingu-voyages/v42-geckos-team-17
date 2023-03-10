import tw, { styled, css } from 'twin.macro'

export const FormInputGroupContainer = styled.div(({ webapp }) => [
  tw`relative flex flex-col gap-y-2`,

  css`
    // Label
    & > label {
      ${tw`text-lg`}
    }

    // Input
    & > input {
      ${tw`w-full px-4 py-3 font-normal border rounded-md border-bg4 focus:outline-none focus:border-accent2`}
    }

    // Error span
    & > span {
      ${tw`absolute bottom-0 left-0 px-1 text-xs translate-y-5 text-error`}
    }
  `,

  webapp &&
    css`
      // Webapp Input
      input {
        ${tw`border-none bg-bg5 focus:border-none focus:ring-0`}
      }
    `,
])
