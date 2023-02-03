import tw, { styled } from 'twin.macro'

export const TrustedCompaniesSection = styled.section`
  ${tw`py-6 bg-bg1 h-fit md:py-12`}
`

export const CompaniesGrid = styled.div`
  ${tw`grid grid-cols-2 justify-items-center gap-1 my-8 md:gap-4 lg:grid-cols-3`}
`

export const CompanyCard = styled.div`
  ${tw`flex flex-col items-center justify-center w-40 h-24 px-2 py-2 rounded-lg shadow-lg md:h-36 md:w-80`}

  svg {
    ${tw`w-36 md:w-fit`}
  }
`
