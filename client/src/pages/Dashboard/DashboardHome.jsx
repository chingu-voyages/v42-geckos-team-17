import React from 'react'

// Components
import { UserStats, Totals } from '../../components'
import TransactionsList from '../../components/dashboard/transactions/TransactionsList'

function DashboardHome() {
  return (
    <>
      <Totals />
      <UserStats />
      <TransactionsList transactionsLoc="Home" />
    </>
  )
}

export default DashboardHome
