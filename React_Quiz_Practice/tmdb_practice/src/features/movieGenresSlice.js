import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovieGenres } from '../api/tmdbApi'

export const fetchMovieGenres = createAsyncThunk('movies/fetchMovieGenres', async () => {
   const response = await getMovieGenres()
   return response.data.genres
})

const movieGenresSlice = createSlice({
   name: 'movieGenresSlice',
   initialState: {
      movieGenresList: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         // 데이터를 가져오는 동안
         .addCase(fetchMovieGenres.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieGenres.fulfilled, (state, action) => {
            state.loading = false
            state.movieGenresList = action.payload
         })
         .addCase(fetchMovieGenres.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default movieGenresSlice.reducer
