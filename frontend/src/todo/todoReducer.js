const INITIAL_STATE = {
  description: 'Ler livro',
  list: [
    {
      _id: 1,
      description: 'pagar fatura do cartão',
      done: true
    },

    {
      _id: 2,
      description: 'Reuniao com a equipe',
      done: false
    },

    {
      _id: 3,
      description: 'consulta médica',
      done:false
    }
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch( action.type ) {

    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }

    default:
      return state
  }
}