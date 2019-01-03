import {
  ADD_CART_ITEM,
  SUBTRACT_CART_ITEM,
  RESET_CART,
} from '../constants/actionTypes';

/*
  Import the products list from api.json directly into redux as we should never mutate
  the products list within the app.
  This should be fetched via an api asynchorously for better scalabity.
*/
const productsList = (
  require('../../assets/api.json')
);

const INITIAL_STATE = {
  products: productsList,
  cartItems: [],
};

const findIndex = (item, id) => (
  item.findIndex(cartItem => cartItem.id === id)
);

const incrementCart = (state, payload) => {
  const { cartItems } = state;
  const { id } = payload;
  /* 1. Check if the item index exists in the array. */
  const cartItemIndex = findIndex(cartItems, id);
  if (cartItemIndex === -1) {
    /*  2. Item index does not exist in array.
        Create a new array from the existing state and add a new object to
        the array of objects with a qty of 1.
    */
    return [...cartItems, { ...payload, qty: 1 }];
  }
  /* 3. Item index exists, find the existing qty and increment it by 1. */
  return cartItems.map((item, index) => {
    if (index !== cartItemIndex) {
      /* This isn't the item we care about - keep it as-is */
      return item;
    }
    /* Otherwise, this is the one we want - return an updated value */
    return {
      ...item,
      ...{ id, qty: item.qty + 1 },
    };
  });
};

export const decrementCart = (state, id) => {
  const { cartItems } = state;
  /* 1. Check if the item index exists in the array. */
  const cartItemIndex = findIndex(cartItems, id);
  return cartItems.map((item, index) => {
    if (index !== cartItemIndex) {
      return item;
    }
    return {
      ...item,
      /* dont' allow the user to decrement less than 0. */
      ...{ id, qty: item.qty > 0 ? item.qty - 1 : 0 },
    };
  });
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESET_CART:
      return { ...INITIAL_STATE };
    case ADD_CART_ITEM:
      return { ...state, cartItems: incrementCart(state, action.payload) };
    case SUBTRACT_CART_ITEM:
      return { ...state, cartItems: decrementCart(state, action.payload) };
    default:
      return state;
  }
};
