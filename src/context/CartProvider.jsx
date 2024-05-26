import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../components/helpers/helpers";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkOut: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkOut: false,
      };
    }

    case "REMOVE_ITEM": {
      const newSelectedItem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItems: [...newSelectedItem],
        ...sumProducts(newSelectedItem),
      };
    }

    case "INCREASE_ITEM": {
      const incIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.selectedItems[incIndex].quantity++;

      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    }

    case "DECREASE_ITEM": {
      const decIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decIndex].quantity--;

      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    }

    case "CHECKOUT": {
      return {
        selectedItems: [],
        quantity: 0,
        totalPrice: 0,
        checkOut: true,
      };
    }

    default:
      throw new Error("Invalid Action!");
  }
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
