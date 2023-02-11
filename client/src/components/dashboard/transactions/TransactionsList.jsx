import { useEffect, useState } from 'react'

// styles
import { SecondaryHeading } from '../../../styles/TypographyStyles'
import { TransactionContainer } from '../../../styles/dashboard/transactions/TransactionStyles'

// importing data
import * as TractionsData from '../../../assets/data/dashboard/userTransactionsData.json'

// component
import TransactionItem from './TransactionItem'

function TransitionList() {
  const [transactions, setList] = useState(TractionsData.transactions)

  useEffect(() => {
    setList(TractionsData.transactions)
  }, [])

  return (
    <TransactionContainer>
      <SecondaryHeading app>My Transactions</SecondaryHeading>
      {transactions.map((obj) => (
        <TransactionItem key={obj.id} item={obj} />
      ))}
    </TransactionContainer>
  )
}

export default TransitionList
