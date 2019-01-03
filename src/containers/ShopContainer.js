import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../components/Card';
import Header from '../components/Header';
import { addToCart, subtractFromCart } from '../actions/addToCart';
import { getProductsList, getCartList } from '../selectors/products';

/*
  Should create a selector to calculate the cartQty but as the cart
  is so small, it is fine to filter the cartItems by id and return
  the qty to the component via getCartQty function.
*/
const getCartQty = (cartItems, id) => {
  let cartqty = 0;
  if (cartItems.length > 0 && id) {
    const filteredCart = cartItems.filter(item => item.id === id);
    /*
     As long as the array is greater than 0, assume item with index 0 exists.
     There should never be duplicate key so this assumptions is ok.
    */
    if (filteredCart.length > 0) cartqty = filteredCart[0].qty;
  }
  return cartqty;
};

class ShopContainer extends Component {
  render() {
    const {
      productsList,
      addToCart, // eslint-disable-line
      subtractFromCart, // eslint-disable-line
      cartItems,
      navigation,
    } = this.props;
    return (
      <View flex={1}>
      <Header nav={navigation} canGoBack={false} showCart={true}/>
      <ScrollView>
        {
          productsList.map(item => <Card
            key={item.id}
            product={item}
            qty={getCartQty(cartItems, item.id)}
            addToCart={addToCart}
            subtractFromCart={subtractFromCart}
          />)
        }
      </ScrollView>
      </View>
    );
  }
}

ShopContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  productsList: PropTypes.array.isRequired,
  addToCart: PropTypes.func,
  subtractFromCart: PropTypes.func,
  cartItems: PropTypes.arr,
};

ShopContainer.defaultProps = {
  cartItems: [],
};

export default connect(state => ({
  cartItems: getCartList(state),
  productsList: getProductsList(state),
}), {
  addToCart,
  subtractFromCart,
})(ShopContainer);
