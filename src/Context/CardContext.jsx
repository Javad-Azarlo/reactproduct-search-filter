import React, { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../setvices/Helper";
const initialState = {
  selectedItems: [],
  itemCunter: 0,
  total: 0,
  checkOut: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quntity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "DEL_ITEM":
      const newSelected = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      console.log("newse");
      console.log(newSelected);
      console.log("newse");

      return {
        ...state,
        selectedItems: [...newSelected],
        ...sumProducts(newSelected),
      };
    case "INCRESE_ITEM":
      const indexIncres = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexIncres].quntity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "DECRESE_ITEM":
      const indexDecrese = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexDecrese].quntity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemCunter: 0,
        total: 0,
        checkOut: true,
      };
  }
};
const CardContext = createContext();
function CardProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
}
function useCard() {
  const { state, dispatch } = useContext(CardContext);
  return [state, dispatch];
}
export { useCard };
export default CardProvider;
