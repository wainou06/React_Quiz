import { useDispatch, useSelector } from 'react-redux'

const CounterComponent2 = () => {
   const count = useSelector((state) => state.count)
   const dispatch = useDispatch()

   return (
      <div>
         <h1>Counter: {count}</h1>
         <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>2배</button>
         <button onClick={() => dispatch({ type: 'increment', payload: 3 })}>3배</button>
         <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>10배</button>
         <button onClick={() => dispatch({ type: 'decrement' })}>초기화</button>
      </div>
   )
}

export default CounterComponent2
