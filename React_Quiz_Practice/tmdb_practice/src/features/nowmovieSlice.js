import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNowMovies } from '../api/tmdbApi'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getNowMovies()
   return response.data.results
})

const nowmovieSlice = createSlice({
   name: 'nowmovies',
   initialState: {
      nowmovies: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         // 데이터를 가져오는 동안
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.nowmovies = action.payload
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default nowmovieSlice.reducer
