import { createSlice } from '@reduxjs/toolkit'

// Initial State
const initialState = {
  isOpen: false,
  type: '',
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setType: (state, { payload }) => {
      state.type = payload
    },
    openModal: (state) => {
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
    },
  },
})

export const { setType, openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
