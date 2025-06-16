// import Quiz01 from './Quiz01'
import Quiz0101 from './Quiz01_1/Login'
import storeQuiz0101 from './Quiz01_1/store'
import { Provider } from 'react-redux'
import storeQuiz02 from './Quiz02/store2'
import CounterComponent from './Quiz02/CounterComponent'
import CounterComponent2 from './Quiz02/CounterComponent2'
import storeQuiz03 from './Quiz03/store'
import TodoComponent from './Quiz03/TodoComponent'
/* import storeQuiz04 from './Quiz04/store'
import TodoComponent from './Quiz04/TodoComponent' */

function App() {
   // return <Quiz01 />
   /*  return (
      <Provider store={storeQuiz0101}>
         <Quiz0101 />
      </Provider>
   ) */
   /* return (
      <Provider store={storeQuiz02}>
         <CounterComponent2 />
      </Provider>
   ) */
    return (
      <Provider store={storeQuiz03}>
         <TodoComponent />
      </Provider>
   )
   /* return (
      <Provider store={storeQuiz04}>
         <TodoComponent />
      </Provider>
   ) */
}

export default App
