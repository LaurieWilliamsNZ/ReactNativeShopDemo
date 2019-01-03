import {
  ADD_CART_ITEM,
  SUBTRACT_CART_ITEM,
} from '../constants/actionTypes';

export const addToCart = productId => ({
  type: ADD_CART_ITEM,
  payload: { id: productId },
});

export const subtractFromCart = productId => ({
  type: SUBTRACT_CART_ITEM,
  payload: productId,
});
