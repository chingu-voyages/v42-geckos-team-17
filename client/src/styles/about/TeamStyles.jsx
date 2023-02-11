import tw, { styled } from 'twin.macro'

export const TeamContainer = styled.div`
  ${tw`bg-gradient-to-r from-bg1 to-bg2`}
`

export const TeamList = styled.div`
  ${tw`grid grid-flow-col gap-6 pt-12 pb-8 mt-10 overflow-x-scroll snap-x snap-mandatory`}

  -ms-scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
`

export const TeamCardContainer = styled.div`
  ${tw`bg-bg3 relative w-[calc(100vw-48px)] md:w-[550px] pt-12 pb-8 px-8 snap-center flex flex-col items-center gap-y-4 text-center border border-bg4 rounded-md`}

  img {
    ${tw`h-[72px] w-[72] filter grayscale rounded-full absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]`}
  }

  &:hover img {
    ${tw`filter-none`}
  }
`

export const SocialLinks = styled.div`
  ${tw`flex gap-4`}
`

export const ButtonsContainer = styled.div`
  ${tw`flex justify-center gap-1 mt-6 sm:hidden`}
`
// `

export const RoundButton = styled.div`
  ${tw`inline w-4 h-4 transition delay-300 rounded-full bg-bg3 shadow-button`}

  ${({ isActive }) => isActive && tw`bg-accent1`}
`
