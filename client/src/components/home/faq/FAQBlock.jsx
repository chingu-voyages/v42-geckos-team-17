import { useState } from 'react'
import { TriangleIcon } from '../../../assets/icons/icons'
import { AnswerDiv, FAQDiv, QuestionDiv } from '../../../styles/home/FAQStyles'

function FAQBlock({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen((prev) => !prev)

  return (
    <FAQDiv onClick={handleClick} isOpen={isOpen}>
      <QuestionDiv className="flex">
        <p>{question}</p>
        <TriangleIcon />
      </QuestionDiv>
      <AnswerDiv>{isOpen ? <p>{answer}</p> : null}</AnswerDiv>
    </FAQDiv>
  )
}

export default FAQBlock
