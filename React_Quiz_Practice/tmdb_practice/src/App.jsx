import NowMovieDetail from './components/NowMovieDetail'
import NowMovieList from './components/NowMovieList'
import { Route, Routes } from 'react-router-dom'

function App() {
   return (
      <Routes>
         <Route path="/" element={<NowMovieList />}></Route>
         <Route path="/detail/:movieId" element={<NowMovieDetail />}></Route>
      </Routes>
   )
}

export default App
