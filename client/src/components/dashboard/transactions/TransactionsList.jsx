import { useEffect, useState } from 'react'

// styles
import { SecondaryHeading } from '../../../styles/TypographyStyles'
import {
  TransactionContainer,
  TransactionRow,
} from '../../../styles/dashboard/transactions/TransactionStyles'

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
        <TransactionRow key={obj.id}>
          <TransactionItem item={obj} />
        </TransactionRow>
      ))}
    </TransactionContainer>
  )
}

export default TransitionList
