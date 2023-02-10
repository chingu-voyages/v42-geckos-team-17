import { useEffect, useState } from 'react'

// importing data
import categories from '../../../assets/data/dashboard/categoriesData'

// styles
import { TransactionIcons } from '../../../styles/dashboard/transactions/TransactionStyles'

function TransactionItem({ item }) {
  function searchIcon(name) {
    let result = {}

    categories.forEach((icon) => {
      if (name === icon.name) {
        result = icon
      }
    })
    return result
  }

  const [fromIcon, setFromIcon] = useState(searchIcon(item.from))
  const [categoryIcon, setCategoryIcon] = useState(searchIcon(item.categoryId))
  const arrowIcon = searchIcon('arrow')

  useEffect(() => {
    setFromIcon(searchIcon(item.from))
    setCategoryIcon(searchIcon(item.categoryId))
  }, [])

  return (
    <>
      <TransactionIcons>
        {fromIcon.icon}
        {arrowIcon.icon}
        {categoryIcon.icon}
      </TransactionIcons>
      <p>-{item.amount} $</p>
    </>
  )
}

export default TransactionItem
