import tw, { styled } from 'twin.macro'

export const PromotionSection = styled.section`
  ${tw`bg-bg2 pt-20 pb-24 sm:py-24 bg-bg1`}
`

export const PromotionInner = styled.div`
  ${tw`h-full flex flex-col justify-center items-center gap-y-4`}

  h2 {
    ${tw`text-center sm:text-left sm:self-start`}
  }

  p {
    ${tw`text-center sm:text-left sm:self-start lg:w-1/2 mt-6 text-accent1`}
  }
`

export const StatsAndImageContainer = styled.div`
  ${tw`flex flex-col-reverse md:flex-row w-full gap-8 mt-12`}
`

export const Stats = styled.div`
  ${tw`relative h-64 sm:h-10 md:h-96 w-full rounded-md  md:my-0`}
  h3 {
    ${tw`font-bold `}
  }
  p {
    ${tw`text-accent1 font-semibold mt-0 `}
  }
`

export const DownloadStats = styled.div`
  ${tw`static text-center mt-10 sm:mt-0 sm:text-left sm:absolute  sm:left-[2.5%] sm:top-[5%] md:top-[0%] md:left-[0%]`}
`

export const AwardStats = styled.div`
  ${tw`static text-center mt-10 sm:mt-0 sm:text-left sm:absolute sm:left-[42.5%] sm:top-[5%] md:top-[37%] md:left-[20%]`}
`

export const MoneyStats = styled.div`
  ${tw`static text-center mt-10 sm:mt-0 sm:text-left sm:absolute sm:left-[75%] sm:top-[5%] md:top-[75%] md:left-[43%] w-auto md:w-full`}
`

export const ImageContainer = styled.div`
  ${tw`w-full rounded-md sm:px-12 md:px-0`}
  img {
    ${tw`sm:h-96 object-cover w-full rounded-md`}
  }
`
