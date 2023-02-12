import tw, { styled } from 'twin.macro'

// H1
// Website: can be seen in Hero
// Webapp: can be seen in HeroNav in Dashboard (Desktop only) or modals (Desktop and Tablets only)
export const PrimaryHeading = styled.h1(({ app }) => [
  tw`text-5xl leading-[60px] sm:text-[64px] md:text-[70px] font-extrabold text-text-200`,

  // Webapp
  app && tw`text-3xl leading-[42px] sm:text-4xl md:text-4xl font-bold`,
])

// H2
// Website: every section heading
// Webapp: every section heading
export const SecondaryHeading = styled.h2(({ app }) => [
  tw`text-3xl leading-[34px] sm:text-4xl sm:leading-[62px] md:text-5xl font-bold text-text-200`,

  // Webapp
  app && tw`text-xl font-medium leading-6 sm:text-2xl sm:leading-7 md:text-2xl`,
])

// H3
// Website: inside section element, example Features
// Webapp: inside account card
export const TertiaryHeading = styled.h3(({ app }) => [
  tw`text-2xl sm:text-[32px] sm:leading-[36px] font-medium text-text-200`,

  // Webapp
  app && tw`text-lg sm:text-lg`,
])

// H4
// Website: inside section element, example Location section
// Webapp:
export const QuaternaryHeading = styled.h3(({ app }) => [
  tw`text-2xl font-bold text-text-200`,

  // Webapp
  app && tw``,
])

// Paragraph
export const Paragraph = styled.p(({ app }) => [
  tw`text-lg font-normal text-text-100`,

  // Webapp
  app && tw`text-sm font-medium`,
])
