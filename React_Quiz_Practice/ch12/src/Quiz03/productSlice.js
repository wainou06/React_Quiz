import { createSlice } from '@reduxjs/toolkit'

// 여기에 코드 작성
const productSlice = createSlice({
   name: 'products',
   initialState: [],
   reducers: {
      addProduc: (state, action) => {
         state.push({ id: Date.now(), text: action.payload })
      },
      removeProduc: (state, action) => {
         return state.filter((prod) => prod.id !== action.payload)
      },
   },
})

export default productSlice
export const { addProduc, removeProduc } = productSlice.actions
