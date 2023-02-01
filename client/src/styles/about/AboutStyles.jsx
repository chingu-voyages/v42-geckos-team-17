import tw, { styled } from 'twin.macro'

export const AboutSectionStyles = styled.div`
  ${tw`bg-bg2 pt-20 pb-24 sm:py-24 `}
`

export const DetailAndImageContainer = styled.div`
  ${tw`flex  flex-col-reverse lg:flex-row gap-10`}
`

export const AboutDetail = styled.div`
  ${tw`flex flex-col mt-5 w-full`}
`

export const ImageContainer = styled.div`
  ${tw`w-full rounded-md sm:px-12 md:px-0`}
  img {
    ${tw`sm:h-96 object-cover w-full rounded-md`}
  }
`
export const AboutSecondaryHeading = styled.h2(({ app }) => [
  tw`text-3xl leading-[30px] sm:text-4xl sm:leading-[60px] md:text-5xl font-bold text-text-200 text-center lg:text-left`,

  // Webapp
  app && tw`text-xl font-medium leading-6 sm:text-2xl sm:leading-7 md:text-2xl`,
])

export const AboutParagraph = styled.p(({ app }) => [
  tw`text-center sm:text-left text-lg font-normal sm:w-[85%] mt-10 text-accent1 self-center lg:self-start`,
  // Webapp
  app && tw`text-sm font-medium`,
])
