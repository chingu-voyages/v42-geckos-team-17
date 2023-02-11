import tw, { styled } from 'twin.macro'

export const TrustedCompaniesSection = styled.section`
  ${tw`bg-gradient-to-r from-bg1 to-bg2 h-fit`}
`

export const CompaniesGrid = styled.div`
  ${tw`grid grid-cols-2 gap-1 my-8 justify-items-center md:gap-4 lg:grid-cols-3`}
`

export const CompanyCard = styled.div`
  ${tw`flex flex-col items-center justify-center w-40 h-24 px-2 py-2 rounded-lg shadow-lg bg-bg3 md:h-36 md:w-80`}

  svg {
    ${tw`w-36 md:w-fit`}
  }
`
