// ao dar o dispatch é enviado o type e o payload (product, aqui)
// e os reducers ouvem TODAS as actions.
// pra isso usar o switch
// inicialize o state
// passe o segundo parâmtro action
export default function cart(state = [], action) {
  switch(action.type) {
    case 'ADD_TO_CART':
      // faz a modificação do state
      // redux avisa todos que tem o connect
      // e recebem o state 
      // e a partir daí, acessar o reducer ou reducers que 
      // estiver interessado no componente
      return [...state, action.product ];
    default:
      return state;
  }
}