import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Data
// Maybe need to be changed for Chartjs
import userExpensesData from '../../assets/data/dashboard/userExpensesData.json'

// Initial State
const initialState = {
  expenses: [],
  expensesTop: [],
}

// Get all expenses
export const getAll = createAsyncThunk('expense/getAll', async (thunkAPI) => {
  return {
    expenses: userExpensesData.expenses,
  }
})

// Get to 5
export const getTop = createAsyncThunk('expense/getTop', async (thunkAPI) => {
  return {
    expenses: userExpensesData.expenses,
  }
})

// Add new expense
export const addNewExpense = createAsyncThunk(
  'expense/addNewExpense',
  async (expense, thunkAPI) => {
    return {
      expense,
    }
  }
)

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  extraReducers: (builder) => {
    // Get all
    builder.addCase(getAll.fulfilled, (state, { payload }) => {
      state.expenses = payload.expenses
    })

    // Get top 5
    builder.addCase(getTop.fulfilled, (state, { payload }) => {
      state.expensesTop = payload.expenses
    })

    // Add new expense
    builder.addCase(addNewExpense.fulfilled, (state, { payload }) => {
      state.expenses.push(payload.expense)
    })
  },
})

export default expenseSlice.reducer
