
interface State {
  cart: [];
}

const initialState: State = {
  cart: [],
};

const ShoppingCartReducer = (state: State = initialState, action:{type: string, payload: any}): State => {
  console.log(action)
  switch (action.type) {
    case "UPDATE_CART":
      return { ...state, cart: [] };
      case "EMPTY_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default ShoppingCartReducer;