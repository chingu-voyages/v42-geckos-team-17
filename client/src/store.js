import { configureStore } from '@reduxjs/toolkit'

// Slices
import userSlice from './features/user/userSlice'
import expenseSlice from './features/expense/expenseSlice'
import accountSlice from './features/account/accountSlice'
import transactionSlice from './features/transaction/transactionSlice'
import incomeSlice from './features/income/incomeSlice'
import modalSlice from './features/modal/ModalSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    expense: expenseSlice,
    account: accountSlice,
    transaction: transactionSlice,
    income: incomeSlice,
    modal: modalSlice,
  },
})
