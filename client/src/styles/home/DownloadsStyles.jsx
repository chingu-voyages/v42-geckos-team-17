import tw, { styled } from 'twin.macro'

export const DownloadsSection = styled.section`
  ${tw`bg-bg2 py-24 px-10`}
`

export const DownloadsPosition = styled.div`
  ${tw`mx-auto max-w-xl`}
  // title
  h2 {
    ${tw`text-center`}
  }
  // sub-title
  p:only-of-type {
    ${tw`mx-auto my-8 w-[90%] text-center text-black`}
  }
`

export const GroupButtons = styled.div`
  ${tw`mb-2 flex flex-col justify-center gap-12 pt-8 md:flex-row`}
`

export const DownloadButton = styled.button`
  ${tw`bg-accent1 text-white text-lg font-medium py-5 px-5 sm:px-10 shadow-button mx-auto flex w-[200px] items-center justify-center gap-4 rounded-md sm:min-w-[280px] hover:bg-white  transition duration-300`}

  // button texts
  p {
    ${tw`text-left text-[9px] leading-4 text-white `}
  }
  p + p {
    ${tw`text-[18px]`}
  }
  &:hover p {
    ${tw`text-accent1`}
  }

  // button icon hover
  &:hover svg path.white_apple {
    ${tw`fill-accent1`};
  }
`

export const DownloadButtonInnerFlex = styled.div`
  ${tw`flex flex-col`}
`
