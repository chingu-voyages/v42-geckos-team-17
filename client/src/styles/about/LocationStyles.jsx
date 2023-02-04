import tw, { styled } from 'twin.macro'

export const LocationContainer = styled.section`
  ${tw`py-12 bg-bg2 md:py-16 lg:py-20`}

  .leaflet-container {
    ${tw`w-full mt-9 mb-5 h-[500px] sm:h-[400px] sm:mt-14 sm:mb-10`}
  }
`

export const MapNavigation = styled.div`
  ${tw`flex gap-7`}
`

export const LocationButton = styled.button(({ active }) => [
  tw`flex flex-col items-start w-full gap-6 p-12 bg-white rounded-md text-start`,

  // Active
  active && tw`shadow-button`,
])
