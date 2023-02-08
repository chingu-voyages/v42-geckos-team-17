import { configureStore } from '@reduxjs/toolkit'

// Slices
import userSlice from './features/user/userSlice'
import expenseSlice from './features/expense/expenseSlice'
import accountSlice from './features/account/accountSlice'
import transactionSlice from './features/transaction/transactionSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    expense: expenseSlice,
    account: accountSlice,
    transaction: transactionSlice,
  },
})
