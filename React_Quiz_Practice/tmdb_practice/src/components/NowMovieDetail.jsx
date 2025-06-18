import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchMovieDetails } from '../features/nowmovieSlice'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function NowMovieDetail() {
   const { movieId } = useParams()
   const dispatch = useDispatch()
   const { nowmovieDetails, loading, error } = useSelector((state) => state.nowmovies)

   useEffect(() => {
      if (movieId) {
         dispatch(fetchMovieDetails(movieId))
      }
   }, [dispatch, movieId])

   if (loading) return <p>로딩중...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div style={{ padding: '10px' }}>
         {nowmovieDetails && (
            <div>
               <div>
                  <div>
                     <img src={`https://image.tmdb.org/t/p/w400${nowmovieDetails.poster_path}`} alt={nowmovieDetails.title} />
                  </div>
                  <h2>{nowmovieDetails.title}</h2>
                  <h2>줄거리</h2>
                  <p>{nowmovieDetails.overview}</p>
                  <Link to={`/genre/movie/list`}>
                     <h2>장르</h2>
                  </Link>
                  <p>{nowmovieDetails.genres.map((genre) => `${genre.name}`).join(', ')}</p>
                  <h2>개봉일</h2>
                  <p>{nowmovieDetails.release_date}</p>
                  <h2>평점</h2>
                  <p>{nowmovieDetails.vote_average.toFixed(1)}</p>
               </div>
            </div>
         )}
      </div>
   )
}

export default NowMovieDetail
