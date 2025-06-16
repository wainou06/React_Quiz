// 여기에 코드 구현
const initialState = { todos: [] }

// 리듀서 함수
function todoReducer(state = initialState, action) {
   switch (action.type) {
      case 'add':
         return { todos: [...state.todos, { id: Date.now(), text: action.payload }] }
      // {todos: [], 빈 배열에 id: (랜덤숫자), text: 사용자가 입력한 값 생성 => {id: 1234, text: 퀴즈 풀기}
      // 액션을 취할 때마다 생성, state 값 바뀜 {id: 1234, text: 퀴즈 풀기, {새로운 배열++}}
      case 'delete':
         return { todos: state.todos.filter((todo) => todo.id !== action.payload) }
      // 생긴 배열에 필터를 적용(빈 배열에 필터는 적용할 수 없으므로.)
      // 생긴 배열 id가 action.payload 값과 같지 않을시! todos 배열에 저장. 같을시에는 실행되지 않음! (제외하고 배열에 삽입)
      default:
         return state
   }
}

export default todoReducer
