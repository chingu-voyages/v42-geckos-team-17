import React from 'react'

// Styled components
import {
  CategoryIconContainer,
  IconContainer,
} from '../../styles/dashboard/CategoryIconStyles'

// Categories data
import categories from '../../assets/data/dashboard/categoriesData'

function CategoryIcon({ categoryId }) {
  // Get category (icon and color) from data
  const category = categories.filter(
    (categoryItem) => categoryItem.id === categoryId
  )[0]

  return (
    <CategoryIconContainer color={category.color}>
      <IconContainer>{category.icon}</IconContainer>
    </CategoryIconContainer>
  )
}

export default CategoryIcon
