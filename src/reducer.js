export const initialState = {
  basket: [],
  user: null,
  product: null,
  // list: []
};

export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "CHECK_PRODUCT_INFO":
      console.log(initialState.product);
      return {
        ...state,
        product: action.item
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: []
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove (id: ${action.id})`);
      }

      return {
        ...state,
        basket: newBasket
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};

export default reducer;
