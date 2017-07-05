const INITIAL_STATE = { description: '', category: '', list: [] }

export default (state = INITIAL_STATE, action) => {
  switch( action.type ) {

    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }

    case 'CATEGORY_CHANGED':
      return { ...state, category: action.payload }

    case 'TODO_SEARCHED':
      return { ...state, list: action.payload }

    case 'TODO_CLEAR':
      return { ...state, description: '', category: '' }

    default:
      return state
  }
}