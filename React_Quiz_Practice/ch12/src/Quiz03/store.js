// 여기에 코드 작성
import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'

const store = configureStore({
   reducer: { products: productSlice.reducer },
})

export default store
