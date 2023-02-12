import { useEffect, useState } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { getAll as getAllTransactions } from '../../../features/transaction/transactionSlice'

// styles
import { SecondaryHeading } from '../../../styles/TypographyStyles'
import { TransactionContainer } from '../../../styles/dashboard/transactions/TransactionStyles'

// component
import TransactionItem from './TransactionItem'

// get changing transaction content based of info
function getList(info, transactions) {
  let title = 'My Transactions'
  let list = transactions

  if (info === 'Home') {
    title = 'Last Trasactions'
    list = list.slice(0, 5)
  }

  return { title, list }
}

function TransitionList({ transactionsLoc }) {
  // Redux
  const dispatch = useDispatch()
  const { transactions } = useSelector((store) => store.transaction)

  // Title and list if transactions
  const [info, setInfo] = useState({ title: '', list: [] })

  // Load data
  useEffect(() => {
    dispatch(getAllTransactions())
  }, [])

  // Get data according to page/section
  useEffect(() => {
    if (transactions.length > 0) {
      setInfo(getList(transactionsLoc, transactions))
    }
  }, [transactions])

  return (
    <TransactionContainer>
      <SecondaryHeading app>{info.title}</SecondaryHeading>
      {info.list.map((obj) => (
        <TransactionItem key={obj.id} item={obj} />
      ))}
    </TransactionContainer>
  )
}

export default TransitionList
