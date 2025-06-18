import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNowMovies, getMovieDetails } from '../api/tmdbApi'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getNowMovies()
   return response.data.results
})

export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movieId) => {
   const response = await getMovieDetails(movieId)
   return response.data
})

const nowmovieSlice = createSlice({
   name: 'nowmovies',
   initialState: {
      nowmovies: [],
      nowmovieDetails: null,
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         // 데이터를 가져오는 동안
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.nowmovies = action.payload
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchMovieDetails.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false
            state.nowmovieDetails = action.payload
         })
         .addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default nowmovieSlice.reducer
