const initialState = {
  listTransactions: [],
  cart: [],
  isLoading: true,
  isLogin: false,
};

export default function transactionReducer(
  stateTransactions = initialState,
  action
) {
  switch (action.type) {
    case "CHANGE_INPUT_TRANSACTION":
      return {
        ...stateTransactions,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "POST_TRANSACTION":
      return {
        ...stateTransactions,
        transaction: action.payload,
        isLoading: false,
      };
    case "GET_TRANSACTION":
      return {
        ...stateTransactions,
        cart: action.payload,
        isLoading: false,
      };
    default:
      return stateTransactions;
  }
}
