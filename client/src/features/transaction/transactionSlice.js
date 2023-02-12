import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Data
import transactionsData from '../../assets/data/dashboard/userTransactionsData.json'

// Initial State
const initialState = {
  transactions: [],
}

// Get all transactions
export const getAll = createAsyncThunk('transaction/getAll', async () => ({
  transactions: transactionsData.transactions,
}))

// Add new transaction
export const addNewTransaction = createAsyncThunk(
  'expense/addNewTransaction',
  async (transaction) => ({
    transaction,
  })
)

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: (builder) => {
    // Get all
    builder.addCase(getAll.fulfilled, (state, { payload }) => {
      state.transactions = payload.transactions
    })

    // Add new transaction
    builder.addCase(addNewTransaction.fulfilled, (state, { payload }) => {
      state.transactions.unshift(payload.transaction)
    })
  },
})

export default transactionSlice.reducer
