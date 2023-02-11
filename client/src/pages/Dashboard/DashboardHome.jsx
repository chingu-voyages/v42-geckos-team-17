import React from 'react'

// Components
import { UserStats } from '../../components'
import TransactionsList from '../../components/dashboard/transactions/TransactionsList'

function DashboardHome() {
  return (
    <>
      <UserStats />
      <TransactionsList transactionsLoc="Home" />
    </>
  )
}

export default DashboardHome
