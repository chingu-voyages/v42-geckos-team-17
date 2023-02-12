import tw, { styled } from 'twin.macro'

export const CTASection = styled.section`
  ${tw`bg-gradient-to-r from-bg1 to-bg2`}
`

export const CTAInner = styled.div`
  ${tw`flex flex-col items-center justify-around h-full sm:flex-row`}

  h3:nth-of-type(1) {
    ${tw`!font-extrabold`}
  }
`
export const GroupButtons = styled.div`
  ${tw`flex flex-col justify-center gap-4 pt-8 mb-2 lg:flex-row`}
`
