import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Data
import incomeData from '../../assets/data/dashboard/userIncomeData.json'

// Initial State
const initialState = {
  income: [],
}

// Get all income
export const getAll = createAsyncThunk('income/getAll', async () => ({
  income: incomeData.income,
}))

// Add new income
export const addNewIncome = createAsyncThunk(
  'income/addNewIncome',
  async (income) => ({
    income,
  })
)

const incomeSlice = createSlice({
  name: 'income',
  initialState,
  extraReducers: (builder) => {
    // Get all
    builder.addCase(getAll.fulfilled, (state, { payload }) => {
      state.income = payload.income
    })

    // Add new transaction
    builder.addCase(addNewIncome.fulfilled, (state, { payload }) => {
      state.income.push(payload.income)
    })
  },
})

export default incomeSlice.reducer
