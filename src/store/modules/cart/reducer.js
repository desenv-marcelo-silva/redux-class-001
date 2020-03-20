import produce from 'immer';

// ao dar o dispatch é enviado o type e o payload (product, aqui)
// e os reducers ouvem TODAS as actions.
// pra isso usar o switch
// inicialize o state
// passe o segundo parâmtro action
export default function cart (state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      // faz a modificação do state
      // redux avisa todos que tem o connect
      // e recebem o state
      // e a partir daí, acessar o reducer ou reducers que
      // estiver interessado no componente
      return produce (state, draft => {
        const productIndex = draft.findIndex (p => p.id === action.product.id);
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push ({
            ...action.product,
            amount: 1,
          });
        }
      });
    /*
      return [...state, {
        ...action.product,
        amount: 1,
      } ];
      */
    case '@cart/REMOVE':
      return produce (state, draft => {
        const productIndex = draft.findIndex (p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice (productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT':
      if (action.amount <= 0) {
        return state;
      }
      
      return produce(state, draft => {
        const productIndex = draft.findIndex (p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      })
    default:
      return state;
  }
}
