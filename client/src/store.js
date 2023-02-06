import { configureStore } from '@reduxjs/toolkit'

// Slices
import userSlice from './features/user/userSlice'
import expenseSlice from './features/expense/expenseSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    expense: expenseSlice,
  },
})
