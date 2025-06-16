import { useDispatch, useSelector } from 'react-redux'
import { up, reset } from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   const number = useSelector((state) => state.counter.number)
   return (
      <div>
         <h1>현재 숫자: {number}</h1>
         <button onClick={() => dispatch(up(2))}>2배</button>
         <button onClick={() => dispatch(up(3))}>3배</button>
         <button onClick={() => dispatch(up(10))}>10배</button>
         <button onClick={() => dispatch(reset())}>초기화</button>
      </div>
   )
}

export default Counter
