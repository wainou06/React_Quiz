import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      //여기에 코드 작성
      addTodo: (state, action) => {
         state.push({ id: Date.now(), text: action.payload })
      },
      removeTodo: (state, action) => {
         return state.filter((todo) => todo.id !== action.payload)
      },
   },
})

export default todoSlice
export const { addTodo, removeTodo } = todoSlice.actions
