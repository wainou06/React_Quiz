import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieGenres } from '../features/movieGenresSlice'
import { useEffect } from 'react'

function MovieGenresList() {
   const dispatch = useDispatch()
   const { movieGenresList, loading, error } = useSelector((state) => state.movieGenres)

   useEffect(() => {
      dispatch(fetchMovieGenres())
   }, [dispatch])

   if (loading) return <p>로딩중...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div>
         <h1>영화 장르 목록</h1>
         <ul>
            {movieGenresList.map((genrelist) => (
               <li key={genrelist.id}>{genrelist.name}</li>
            ))}
         </ul>
      </div>
   )
}

export default MovieGenresList
