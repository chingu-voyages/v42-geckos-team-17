import tw, { styled } from 'twin.macro'

export const PromotionSection = styled.section`
  ${tw`bg-bg3`}
`

export const PromotionInner = styled.div`
  ${tw`relative flex flex-col justify-center h-full gap-y-4`}

  // Heading
  & > div:nth-of-type(1) {
    ${tw`md:w-[50%]`}
  }
`

export const StatsAndImageContainer = styled.div`
  ${tw`flex flex-col-reverse w-full gap-8 mt-12 md:flex-row`}
`

export const Stats = styled.div`
  ${tw`relative w-full rounded-md md:my-0`}
  p {
    ${tw`font-semibold`}
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
  ${tw`relative md:static overflow-hidden w-full min-h-[360px] sm:min-w-[340px] lg:min-w-[570px] md:min-h-[384px] sm:min-h-[640px] rounded-md sm:px-12 md:px-0`}

  img {
    ${tw`absolute md:max-w-[600px] lg:max-w-[800px] top-0 right-0 translate-x-[0%] md:translate-y-[-15%] md:translate-x-[40%] lg:translate-x-[40%] xl:translate-x-[30%] z-50 object-cover w-full rounded-md`}
  }
`
