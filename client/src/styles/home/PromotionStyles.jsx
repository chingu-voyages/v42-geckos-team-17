import tw, { styled } from 'twin.macro'

export const PromotionSection = styled.section`
  ${tw`pt-20 pb-24 bg-bg2 sm:py-24 bg-bg1`}
`

export const PromotionInner = styled.div`
  ${tw`flex flex-col justify-center h-full gap-y-4`}
`

export const StatsAndImageContainer = styled.div`
  ${tw`flex flex-col-reverse w-full gap-8 mt-12 md:flex-row`}
`

export const Stats = styled.div`
  ${tw`relative w-full h-64 rounded-md sm:h-10 md:h-96 md:my-0`}
  h3 {
    ${tw`font-bold `}
  }
  p {
    ${tw`mt-0 font-semibold text-accent1 `}
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
    ${tw`object-cover w-full rounded-md sm:h-96`}
  }
`
