const initialState = {
   isAuthenticated: false,
   user: null,
}

function authReducer(state = initialState, action) {
   switch (action.type) {
      case 'LOGIN':
         // 여기에 코드 작성
         return { isAuthenticated: true, user: action.payload }
      case 'LOGOUT':
         // 여기에 코드 작성
         return { isAuthenticated: false, user: null }
      default:
         return state
   }
}

export default authReducer
