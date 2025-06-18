import { configureStore } from '@reduxjs/toolkit'
import nowmoviesSlice from '../features/nowmovieSlice'
import movieGenresSlice from '../features/movieGenresSlice'

const store = configureStore({
   reducer: {
      nowmovies: nowmoviesSlice,
      movieGenres: movieGenresSlice,
   },
})

export default store
