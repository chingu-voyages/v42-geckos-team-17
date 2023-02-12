import tw, { styled, css } from 'twin.macro'

export const FormSelectGroupContainer = styled.div(({ webapp }) => [
  tw`relative flex flex-col gap-y-2`,

  css`
    // Label
    label {
      ${tw`text-lg`}
    }

    // Select button
    & > button {
      ${tw`relative flex w-full px-4 py-3 font-normal border rounded-md border-text-100 focus:border-text-200 focus:outline-none focus:ring-1 focus:ring-text-200`}
    }

    // Dropdown Icon
    & > button > span {
      ${tw`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none`}
    }

    // Dropdown list
    & > ul {
      ${tw`absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-bg3 border rounded-md shadow-lg snap-y border-text-200 max-h-48 ring-1 ring-black ring-opacity-5 focus:border-accent2 focus:outline-none`}
    }

    & > ul > li {
      ${tw``}
    }

    // Error span
    & > span {
      ${tw`absolute bottom-0 left-0 px-1 text-xs text-error`}
    }
  `,

  webapp &&
    css`
      // Webapp Select
      button {
        ${tw`border-none bg-bg5 focus:border-none focus:ring-0`}
      }

      // Weapp Select list
      ul {
        ${tw`border-none bg-bg5`}
      }
    `,
])
