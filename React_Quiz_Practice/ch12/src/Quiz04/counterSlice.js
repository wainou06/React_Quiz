import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
   name: 'counterSlice',
   initialState: { number: 1 },
   reducers: {
      up: (state, action) => {
         state.number *= action.payload
      },
      reset: (state) => {
         state.number = 1
      },
   },
})

export default counterSlice.reducer
export const { up, reset } = counterSlice.actions
