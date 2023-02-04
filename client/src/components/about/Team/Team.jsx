import React, { useState } from 'react'

// Components
import TeamCard from './TeamCard'

// Styled Components
import {
  TeamContainer,
  TeamList,
  ButtonsContainer,
  RoundButton,
} from '../../../styles/about/TeamStyles'
import {
  Container,
  SectionHeadingContainer,
} from '../../../styles/LayoutStyles'
import { SecondaryHeading, Paragraph } from '../../../styles/TypographyStyles'

// Data
import teamData from '../../../assets/data/teamData'

function Team() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Scrolling handler
  const handleScroll = (e) => {
    const screenWidth = window.innerWidth
    const scrollX = e.currentTarget.scrollLeft

    if (scrollX < screenWidth / 2) {
      setActiveIndex(0)
    } else if (scrollX < screenWidth) {
      setActiveIndex(1)
    } else if (scrollX < 2 * screenWidth) {
      setActiveIndex(2)
    } else if (scrollX < 3 * screenWidth) {
      setActiveIndex(3)
    }
  }

  return (
    <TeamContainer>
      <Container>
        {/* Start: Heading */}
        <SectionHeadingContainer center>
          <SecondaryHeading>Meat out team</SecondaryHeading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </SectionHeadingContainer>
        {/* End: Heading */}
        {/* Start: Slider */}
        <TeamList onScroll={handleScroll}>
          {teamData.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </TeamList>
        {/* End: Slider */}
        {/* Start: Buttons */}
        <ButtonsContainer>
          {teamData.map((_, index) => (
            <RoundButton
              isActive={index === activeIndex}
              key={`member-${index}`}
            />
          ))}
        </ButtonsContainer>
        {/* End: Buttons */}
      </Container>
    </TeamContainer>
  )
}

export default Team
