import { createSelector } from 'reselect';

export const getProductState = state => state.products;
export const getCartState = state => state.products.cartItems;

export const getProductsList = createSelector(
  getProductState,
  productsList => productsList.products,
);

export const getCartList = createSelector(
  getCartState,
  productsList => productsList,
);

export const getCartProducts = (state) => {
  const mergeCartProducts = [];
  const cart = getCartList(state);
  const products = getProductsList(state);
  /*
    if the product array or the cart array do not exist,
    return an empty array.
  */
  if (!products || !cart) return mergeCartProducts;
  /*
    loop over the existing items in the cart and get product details
    from the products state by id.
  */
  cart.forEach((item) => {
    const product = products.filter(prod => prod.id === item.id);
    const productId = item.id;
    const productQty = item.qty;
    const productName = product[0].name;
    const productPrice = product[0].price;
    /*
      push cart item with product details into a new array.
    */
    mergeCartProducts.push({
      productId,
      productQty,
      productName,
      productPrice,
      total: (productPrice * productQty),
    });
  });
  /*
    filter out items with 0 quantity values when removed from the shopContainer.
  */
  return mergeCartProducts.filter(item => item.productQty !== 0);
};

export const getCartTotal = (state) => {
  let priceTotal = 0;
  const cartItems = getCartProducts(state);
  if (!cartItems.length) return priceTotal;
  cartItems.forEach((item) => {
    priceTotal += item.total;
  });
  return priceTotal;
};
