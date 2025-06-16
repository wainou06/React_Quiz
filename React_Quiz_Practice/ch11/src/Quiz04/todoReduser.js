const initialState = { items: [] }

function todoReduser(state = initialState, action) {
   switch (action.type) {
      case 'add':
         return { items: [...state.items, { id: Date.now(), text: action.payload }] }

      case 'delete':
         return { items: state.items.filter((item) => item.id !== action.payload) }

      default:
         return state
   }
}

export default todoReduser
