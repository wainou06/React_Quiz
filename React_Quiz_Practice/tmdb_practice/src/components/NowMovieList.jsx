import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../features/nowmovieSlice'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NowMovieList() {
   const dispatch = useDispatch()
   const { nowmovies, loading, error } = useSelector((state) => state.nowmovies)

   useEffect(() => {
      dispatch(fetchMovies())
   }, [dispatch])

   if (loading) return <p>로딩중...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div>
         <h1>현재 상영중인 영화 목록</h1>
         <ul>
            {nowmovies.map((nowmovie) => (
               <Link to={`/detail/${nowmovie.id}`} key={nowmovie.id}>
                  <li>{nowmovie.title}</li>
               </Link>
            ))}
         </ul>
      </div>
   )
}

export default NowMovieList
