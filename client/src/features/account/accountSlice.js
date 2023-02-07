import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Data

// Initial State
const initialState = {
  totalAvailable: '',
  totalMonSpend: '',
  totalMonSaved: '',
  totalSaved: '',
  totalCash: '',
  accounts: [],
}

// Get totals
export const getTotals = createAsyncThunk('expense/getTotals', async () => ({
    totalAvailable: '6000',
    totalMonSpend: '2478',
    totalMonSaved: '1600',
    totalSaved: '2000',
    totalCash: '1567',
  }))

// Get accounts
export const getAccounts = createAsyncThunk('expense/getAccounts', async () => ({
    accounts: [
      {
        id: 'account-1',
        name: 'Bank Account 1',
        decorationId: 'decorationStringProp1',
        amount: '2000',
      },
      {
        id: 'account-2',
        name: 'Bank Account 2',
        decorationId: 'decorationStringProp2',
        amount: '1450',
      },
    ],
  }))

// Add new account
export const addNewAccount = createAsyncThunk(
  'expense/addNewAccount',
  async (account) => ({
      account,
    })
)

const accountSlice = createSlice({
  name: 'account',
  initialState,
  extraReducers: (builder) => {
    // Get totals
    builder.addCase(getTotals.fulfilled, (state, { payload }) => {
      state.totalAvailable = payload.totalAvailable
      state.totalMonSpend = payload.totalMonSpend
      state.totalMonSaved = payload.totalMonSaved
      state.totalSaved = payload.totalSaved
      state.totalCash = payload.totalCash
    })

    // Get accounts
    builder.addCase(getAccounts.fulfilled, (state, { payload }) => {
      state.accounts = payload.accounts
    })

    // Add new account
    builder.addCase(addNewAccount.fulfilled, (state, { payload }) => {
      state.accounts.push(payload.account)
    })
  },
})

export default accountSlice.reducer
