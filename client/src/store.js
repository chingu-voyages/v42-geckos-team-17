import { configureStore } from '@reduxjs/toolkit'

// Slices
import userSlice from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})
