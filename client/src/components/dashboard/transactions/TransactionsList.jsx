import { useEffect, useState } from 'react'

// styles
import { SecondaryHeading } from '../../../styles/TypographyStyles'
import { TransactionContainer } from '../../../styles/dashboard/transactions/TransactionStyles'

// importing data
import * as TractionsData from '../../../assets/data/dashboard/userTransactionsData.json'

// component
import TransactionItem from './TransactionItem'

// get changing trasaction content based of info
function getList(info) {
  let title = 'My Transactions'
  let list = TractionsData.transactions

  if (info === 'Home') {
    title = 'Last Trasactions'
    list = list.slice(0, 5)
  }

  return { title, list }
}

function TransitionList({ transactionsLoc }) {
  let info = getList(transactionsLoc)
  const [transactions, setList] = useState(info.list)

  useEffect(() => {
    info = getList(transactionsLoc)
    setList(info.list)
  }, [])

  return (
    <TransactionContainer>
      <SecondaryHeading app>{info.title}</SecondaryHeading>
      {transactions.map((obj) => (
        <TransactionItem key={obj.id} item={obj} />
      ))}
    </TransactionContainer>
  )
}

export default TransitionList
