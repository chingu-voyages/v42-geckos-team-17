import { useState } from 'react'

// Styled components
import { AnswerDiv, FAQDiv, QuestionDiv } from '../../../styles/home/FAQStyles'
import { Paragraph } from '../../../styles/TypographyStyles'

// Icons
import { TriangleIcon } from '../../../assets/icons/icons'

function FAQBlock({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen((prev) => !prev)

  return (
    <FAQDiv onClick={handleClick} isOpen={isOpen}>
      <QuestionDiv className="flex">
        <Paragraph>{question}</Paragraph>
        <TriangleIcon />
      </QuestionDiv>
      <AnswerDiv>{isOpen ? <Paragraph>{answer}</Paragraph> : null}</AnswerDiv>
    </FAQDiv>
  )
}

export default FAQBlock
