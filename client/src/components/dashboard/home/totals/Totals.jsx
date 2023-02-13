import React, { useState, useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getTotals } from '../../../../features/account/accountSlice'

// Components
import TotalItem from '../../../../components/dashboard/home/totals/TotalItem'

// Styled components
import {
  TotalsContainer,
  TotalsList,
  ButtonsContainer,
  RoundButton,
} from '../../../../styles/dashboard/home/TotalsStyles'
import { SecondaryHeading } from '../../../../styles/TypographyStyles'

const Totals = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  // Redux
  const dispatch = useDispatch()
  const { totalAvailable, totalMonSpend, totalMonSaved } = useSelector(
    (store) => store.account
  )

  useEffect(() => {
    // Get totals
    dispatch(getTotals())
  }, [])

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
    <TotalsContainer>
      <SecondaryHeading app>My finances</SecondaryHeading>
      {/* Start: Totals list */}
      <TotalsList onScroll={handleScroll}>
        <TotalItem
          title={totalAvailable.title}
          amount={totalAvailable.amount}
        />
        <TotalItem title={totalMonSpend.title} amount={totalMonSpend.amount} />
        <TotalItem title={totalMonSaved.title} amount={totalMonSaved.amount} />
      </TotalsList>
      {/* End: Totals list */}
      {/* Start: Buttons */}
      <ButtonsContainer>
        {Array.from(Array(3)).map((_, index) => (
          <RoundButton
            isActive={index === activeIndex}
            key={`total-${index}`}
          />
        ))}
      </ButtonsContainer>
      {/* End: Buttons */}
    </TotalsContainer>
  )
}

export default Totals
