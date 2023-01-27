import tw, { styled } from 'twin.macro'

// Contact section container
export const ContactSection = styled.section`
  ${tw`py-8 md:py-20`}
`

// Contact section Inner container
export const ContactInner = styled.div`
  ${tw`grid grid-cols-1 max-w-[600px] mx-auto gap-10 lg:gap-20 lg:grid-cols-2 lg:max-w-none`}
`

// Promotion / Column 1
export const ContactPromotion = styled.div`
  ${tw`flex flex-col justify-center text-center gap-y-8 sm:text-start`}
`

// Promotion List
export const ContactPromotionList = styled.ul`
  ${tw`flex flex-col justify-center gap-y-6 py-4`}

  // List item 
  li {
    ${tw`flex flex-col items-center gap-x-6 gap-y-4 text-text-100 sm:flex-row sm:items-start`}

    // Icon
    svg {
      ${tw`shrink-0 h-8 w-8 stroke-text-100`}
    }

    // Title
    span {
      ${tw`block font-bold sm:inline-block`}
    }
  }
`
// Contact Form / Column 2
export const ContactForm = styled.form`
  ${tw`flex flex-col gap-8 border border-text-100 rounded-md px-4 py-10 sm:grid sm:grid-cols-2 sm:px-6`}

  // Form title
  h3 {
    ${tw`col-span-2 text-center font-bold`}
  }

  // Email input, Phone input, Check groups
  div:nth-of-type(3),
  div:nth-of-type(4),
  div:nth-of-type(5) {
    ${tw`col-span-2`}
  }

  // Button
  button {
    ${tw`col-span-2`}
  }

  // Span
  span {
    ${tw`col-span-2 text-center text-text-100`}

    // Link
    a {
      ${tw`text-blue-400`}
    }
  }
`
