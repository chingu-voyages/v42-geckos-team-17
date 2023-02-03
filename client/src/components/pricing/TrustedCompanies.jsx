import { ReactComponent as CompanyOne } from '../../assets/images/company_1.svg'
import { ReactComponent as CompanyTwo } from '../../assets/images/company_2.svg'
import { ReactComponent as CompanyThree } from '../../assets/images/company_3.svg'
import { ReactComponent as CompanyFour } from '../../assets/images/company_4.svg'
import { ReactComponent as CompanyFive } from '../../assets/images/company_5.svg'
import { ReactComponent as CompanySix } from '../../assets/images/company_6.svg'

// Styled Components
import { Container, SectionHeadingContainer } from '../../styles/LayoutStyles'
import {
  CompanyCard,
  CompaniesGrid,
  TrustedCompaniesSection,
} from '../../styles/pricing/TrustedCompaniesStyles'
import { TertiaryHeading } from '../../styles/TypographyStyles'

function TrustedCompanies() {
  return (
    <TrustedCompaniesSection>
      <Container>
        {/* Start: Section heading */}
        <SectionHeadingContainer center>
          <TertiaryHeading as="h2">
            Trusted by these relationship-minded companies.
          </TertiaryHeading>
        </SectionHeadingContainer>
        {/* End: Section heading */}
        {/* Start: Companies block */}
        <CompaniesGrid>
          <CompanyCard>
            <CompanyOne />
          </CompanyCard>
          <CompanyCard>
            <CompanyTwo />
          </CompanyCard>
          <CompanyCard>
            <CompanyThree />
          </CompanyCard>
          <CompanyCard>
            <CompanyFour />
          </CompanyCard>
          <CompanyCard>
            <CompanyFive />
          </CompanyCard>
          <CompanyCard>
            <CompanySix />
          </CompanyCard>
        </CompaniesGrid>
        {/* End: Companies block */}
      </Container>
    </TrustedCompaniesSection>
  )
}

export default TrustedCompanies
