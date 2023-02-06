import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Local Storage
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage'

// Data
import userData from '../../assets/data/dashboard/userData.json'

// Initial State
const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  currency: '',
}

// Sign up
export const signUp = createAsyncThunk(
  'user/signUp',
  async (user, thunkAPI) => {
    console.log(user)
    return {
      email: user.email,
      currency: user.currency,
      token: userData.user.token,
      image: userData.user.image,
    }
  }
)

// Sign in
export const signIn = createAsyncThunk(
  'user/signIn',
  async (user, thunkAPI) => {
    return {
      email: user.email,
      currency: userData.user.currency,
      token: userData.user.token,
      image: userData.user.image,
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signOut: (state) => {
      //Remove from state
      state.user = null

      //Remove from local storage
      removeUserFromLocalStorage()
    },
  },
  extraReducers: (builder) => {
    // Sign up
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      console.log(payload)
      state.isLoading = false
      state.user = payload
      addUserToLocalStorage(payload)
    })
    builder.addCase(signUp.rejected, (state) => {
      state.isLoading = false
    })

    // Sign in
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      console.log(payload)
      state.isLoading = false
      state.user = payload
      addUserToLocalStorage(payload)
    })
    builder.addCase(signIn.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const { logoutUser } = userSlice.actions

export default userSlice.reducer
