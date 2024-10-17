import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isSideBarActive: false
  },
  reducers: {
    setSidBareActive(state, action) {
      state.isSideBarActive = action.payload
    }
  }
})

export const appReducer = appSlice.reducer
export const appActions= appSlice.actions

