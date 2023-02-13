import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Data
// Maybe need to be changed for Chartjs
import {
  userExpenses,
  userTopExpenses,
  familyMembersExpenses,
  totalExpensesByDay,
} from '../../assets/data/dashboard/userExpensesData'

// Initial State
const initialState = {
  expenses: [],
  expensesTop: [],
  familyExpenses: { categories: [], members: [] },
  totalExpensesByDay: [],
}

// Get all expenses
export const getAll = createAsyncThunk('expense/getAll', async () => ({
  expenses: userExpenses,
}))

// Get to 5
export const getTop = createAsyncThunk('expense/getTop', async () => ({
  expenses: userTopExpenses,
}))

// Get family expenses
export const getFamilyExpenses = createAsyncThunk(
  'expense/getFamilyExpenses',
  async () => ({
    familyExpenses: familyMembersExpenses,
  })
)

// Get total expenses by day
export const getTotalExpensesByDay = createAsyncThunk(
  'expense/getTotalExpensesByDay',
  async () => ({
    totalExpensesByDay: totalExpensesByDay,
  })
)

// Add new expense
export const addNewExpense = createAsyncThunk(
  'expense/addNewExpense',
  async (expense) => ({
    expense,
  })
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

    // Get family expenses
    builder.addCase(getFamilyExpenses.fulfilled, (state, { payload }) => {
      state.familyExpenses = payload.familyExpenses
    })

    // Get total expenses by day
    builder.addCase(getTotalExpensesByDay.fulfilled, (state, { payload }) => {
      state.totalExpensesByDay = payload.totalExpensesByDay
    })

    // Add new expense
    builder.addCase(addNewExpense.fulfilled, (state, { payload }) => {
      state.expenses.push(payload.expense)
    })
  },
})

export default expenseSlice.reducer
