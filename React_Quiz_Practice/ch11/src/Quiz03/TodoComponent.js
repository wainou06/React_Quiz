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
         setInputValue('')
      }
   }

   // 할 일 삭제
   const handleDeleteTodo = (id) => {
      dispatch({ type: 'delete', payload: id })
   }

   return (
      <div>
         <h1>To-Do List</h1>
         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="할일 입력" />
         <button onClick={handleAddTodo}>추가</button>

         <ul>
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
