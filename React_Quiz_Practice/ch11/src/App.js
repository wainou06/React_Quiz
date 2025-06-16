import Quiz01 from './Quiz01'
import { Provider } from 'react-redux'
import storeQuiz02 from './Quiz02/store2'
import CounterComponent from './Quiz02/CounterComponent'
import CounterComponent2 from './Quiz02/CounterComponent2'
import storeQuiz03 from './Quiz03/store'
import TodoComponent from './Quiz03/TodoComponent'

function App() {
   // return <Quiz01 />
   return (
      <Provider store={storeQuiz02}>
         <CounterComponent2 />
      </Provider>
   )
   /*  return (
      <Provider store={storeQuiz03}>
         <TodoComponent />
      </Provider>
   ) */
}

export default App
