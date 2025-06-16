const initialState = { count: 1 }

function counterReducer2(state = initialState, action) {
   switch (action.type) {
      case 'increment':
         return { count: state.count * action.payload }
      case 'decrement':
         return { count: 1 }
      default:
         return state
   }
}

export default counterReducer2
