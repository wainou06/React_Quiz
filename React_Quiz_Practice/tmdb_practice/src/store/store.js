import { configureStore } from '@reduxjs/toolkit'
import nowmoviesSlice from '../features/nowmovieSlice'

const store = configureStore({
   reducer: {
      nowmovies: nowmoviesSlice,
   },
})

export default store
