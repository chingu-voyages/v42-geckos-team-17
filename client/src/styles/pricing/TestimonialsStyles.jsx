import tw, { styled } from 'twin.macro'

export const TestimonialsSection = styled.section`
  ${tw`py-6 bg-bg1 h-fit md:py-12`}
`

export const TestimonialsInner = styled.div`
  ${tw`flex flex-col h-full gap-y-4`}
`

export const TestimonialsGrid = styled.div`
  ${tw`grid w-full grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center`}
`

export const TestimonialsCardDiv = styled.div`
  ${tw`flex flex-col justify-between p-6 rounded shadow-xl cursor-pointer h-fit border-accent1 `}
`

export const TestimonialsCardBody = styled.div`
  ${tw`mb-2 h-fit`}

  p {
    ${tw`text-text-200`}
  }
`

export const TestimonialCardFooter = styled.div`
  ${tw`mt-2 h-fit`}

  p {
    ${tw`font-semibold text-text-200`}
  }
`
