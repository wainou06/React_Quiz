import axios from 'axios'

const BASE_URL = 'http://api.themoviedb.org/3'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

// axios 객체 생성
// create() 함수 실행 -> axios 객체 생성 -> axios를 통해 API를 call
const tmdbApi = axios.create({
   baseURL: BASE_URL, // 똑같이 반복되는 URL
   headers: {
      accept: 'application/json', // JSON 객체로 결과값 받음
      Authorization: `Bearer ${AUTH_KEY}`, // 인증키
   },
})

// 현재 상영중인 영화 목록 가져오기
export const getNowMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/now_playing', {
      //쿼리스트링
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })
   return response //응답결과 데이터 리턴
}

// 영화상세 정보 가져오기
export const getMovieDetails = async (movieId) => {
   const response = await tmdbApi.get(`/movie/${movieId}`, {
      //쿼리스트링
      params: {
         language: 'ko-KR',
      },
   })
   return response //응답결과 데이터 리턴
}

// 영화 장르목록 가져오기
export const getMovieGenres = async (page = 1) => {
   const response = await tmdbApi.get('/genre/movie/list', {
      //쿼리스트링
      params: {
         language: 'ko',
      },
   })
   return response
}

export default tmdbApi
