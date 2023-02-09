import React from 'react'

// Components
import CategoryIcon from '../../CategoryIcon'

function LegendItem({ expenseItem }) {
  return (
    <li key={expenseItem.id}>
      <CategoryIcon categoryId={expenseItem.categoryId} />
      <div>
        <span>{expenseItem.categoryId}</span>
        <span>{expenseItem.percent}%</span>
      </div>
      <span>{expenseItem.amount} $</span>
    </li>
  )
}

export default LegendItem
