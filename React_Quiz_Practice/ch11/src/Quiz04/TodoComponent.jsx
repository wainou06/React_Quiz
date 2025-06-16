import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoComponent = () => {
   const [inputValue, setInputValue] = useState('')

   const items = useSelector((state) => state.items)
   const dispatch = useDispatch()

   const handleAddTodo = () => {
      if (inputValue.trim()) {
         dispatch({ type: 'add', payload: inputValue })
         setInputValue('')
      }
   }

   const handleDeleteTodo = (id) => {
      dispatch({ type: 'delete', payload: id })
   }

   return (
      <div>
         <h1>상품 등록</h1>
         <input type="text" placeholder="상품명 입력" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
         <button onClick={handleAddTodo}>등록</button>

         <ul>
            {items.map((item) => (
               <li key={item.id}>
                  {item.text} <button onClick={() => handleDeleteTodo(item.id)}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default TodoComponent
