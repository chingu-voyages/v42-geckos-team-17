import tw, { css, styled } from 'twin.macro'

export const LocationContainer = styled.section`
  ${tw`py-12 bg-bg2 md:py-16 lg:py-20`}

  // Leaflet map container
  .leaflet-container {
    ${tw`w-full mt-9 mb-5 h-[500px] md:h-[400px] sm:mt-14 sm:mb-10`}
  }

  // Popup paragraphs
  .leaflet-popup-content > p:nth-of-type(2) {
    ${tw`block md:hidden`}
  }
`

export const MapNavigation = styled.div`
  ${tw`flex gap-3 sm:gap-7`}
`

export const LocationButton = styled.button(({ active }) => [
  tw`flex flex-col items-center w-full gap-6 p-6 bg-white rounded-md lg:p-12 text-start md:items-start`,

  // Paragraphs
  css`
    p {
      ${tw`hidden text-base lg:text-lg md:block`}
    }
  `,

  // Active
  active && tw`shadow-button`,
])
