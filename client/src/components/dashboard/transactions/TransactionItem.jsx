import React from 'react'

// components
import CategoryIcon from '../CategoryIcon'

// styles
import { TransactionIcons } from '../../../styles/dashboard/transactions/TransactionStyles'

// icons
import { ArrowIcon } from '../../../assets/icons/dashboardIcons'

function TransactionItem({ item }) {
  return (
    <>
      <TransactionIcons>
        <CategoryIcon categoryId={item.from} />
        <ArrowIcon />
        <CategoryIcon categoryId={item.categoryId} />
      </TransactionIcons>
      <p>-{item.amount} $</p>
    </>
  )
}

export default TransactionItem
