import React, { Component } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import {
  List,
  ListItem,
  Button,
  Text,
  Icon,
} from 'react-native-elements';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { addToCart, subtractFromCart } from '../actions/addToCart';
import { getCartProducts, getCartTotal } from '../selectors/products';
import { formatPrice } from '../helpers';

class CartContainer extends Component {
  static propTypes = {
    navigation: PropTypes.obj,
    productsList: PropTypes.array.isRequired,
    addToCart: PropTypes.func,
    subtractFromCart: PropTypes.func,
    cartItems: PropTypes.arr,
    cartTotal: PropTypes.number,
  };

  static defaultProps = {
    cartItems: [],
    cartTotal: 0,
  };
  render () { // eslint-disable-line
    const { navigation, cartItems, cartTotal } = this.props;
    return (
      <View flex={1}>
      <Header nav={navigation} canGoBack={true}/>
      { !cartItems.length
        ? <Text
            style={{ textAlign: 'center' }}
            h4>
              {'You have no items in your cart'}
            </Text>
        : <Text
            style={{ textAlign: 'center' }}
            h4>
              {`Total: ${formatPrice(cartTotal)}`}
            </Text> }
      <ScrollView>
      <List>
        {
          cartItems.map((item, index) => (
            <ListItem
              key={index}
              title={`${item.productName} : ${item.productQty} x ${item.productPrice} = ${formatPrice(item.total)}`}
              rightIcon={
                <Icon
                  name='trash'
                  type='font-awesome'
                  color='#f50'
                  // TODO: remove item from cart array by id
                />
              }
            />
          ))
        }
      </List>
      <View marginTop={10}>
      {cartItems.length
        ? <Button
        large
        onPress={() => Alert.alert('Great. Thanks your purchase is complete.')}
        title='Buy Now'
      />
        : null}
      </View>
      </ScrollView>
      </View>
    );
  }
}


export default connect(state => ({
  cartTotal: getCartTotal(state),
  cartItems: getCartProducts(state),
}), {
  addToCart,
  subtractFromCart,
})(CartContainer);
