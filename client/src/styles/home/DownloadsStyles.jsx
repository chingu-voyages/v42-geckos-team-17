import tw, { styled } from 'twin.macro'

export const DownloadsSection = styled.section`
  ${tw`bg-gradient-to-r from-bg1 to-bg2`}
`

export const DownloadsPosition = styled.div`
  ${tw`max-w-xl mx-auto`}
`

export const GroupButtons = styled.div`
  ${tw`flex flex-col gap-6 pt-8 mt-8 mb-2 md:gap-12 sm:flex-row`}
`

export const DownloadButton = styled.button`
  ${tw`bg-bg4 text-white text-lg font-medium w-full py-5 px-5 sm:px-10 shadow-button mx-auto flex max-w-[300px] items-center justify-center gap-4 rounded-md sm:min-w-[280px] hover:bg-bg3  transition duration-300`}

  // button texts
  p {
    ${tw`text-left text-[9px] leading-4 text-white `}
  }
  p + p {
    ${tw`text-[18px]`}
  }
  &:hover p {
    ${tw`text-text-200`}
  }

  // button icon hover
  &:hover svg path.white_apple {
    ${tw`fill-bg4`};
  }
`

export const DownloadButtonInnerFlex = styled.div`
  ${tw`flex flex-col`}
`
