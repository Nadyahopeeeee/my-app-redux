// action = {type:'', payload:'?'}

const deafaulState = {
  cash: 0,
};

export const cashReducer = (state = deafaulState, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payload };
    case 'GET_CASH':
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};
