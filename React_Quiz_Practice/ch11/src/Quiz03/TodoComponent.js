import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

// 여기에 코드 구현
const TodoComponent = () => {
   const [inputValue, setInputValue] = useState('')

   const todos = useSelector((state) => state.todos)
   const dispatch = useDispatch()

   // 새로운 할 일 추가
   const handleAddTodo = () => {
      if (inputValue.trim()) {
         dispatch({ type: 'add', payload: inputValue })
         // Reducer에 action 전달 {type: 'add', payload: inputValue(사용자가 입력한 값)}
         setInputValue('')
      }
   }

   // 할 일 삭제
   const handleDeleteTodo = (id) => {
      dispatch({ type: 'delete', payload: id })
      // Reducer에 action 전달 { type: 'delete', payload: id(Reducer에서 만든 id 값) }
   }

   return (
      <div>
         <h1>To-Do List</h1>
         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="할일 입력" />
         <button onClick={handleAddTodo}>추가</button>

         <ul>
            {/* 여기서 todos는 Reducer에서 만든 배열이다 */}
            {todos.map((todo) => (
               <li key={todo.id}>
                  {todo.text} <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default TodoComponent
