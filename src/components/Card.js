import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import AddToCart from './AddToCart';
import { formatPrice } from '../helpers';

const styles = StyleSheet.create({
  textStyle: {
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
});

const msCard = ({
  product,
  addToCart,
  subtractFromCart,
  qty = 0,
}) => {
  const { id, name, price } = product;
  return (
    <Card
      id={id}
      title={name}>
      <Text style={styles.textStyle}>
        {formatPrice(price)}
      </Text>
      <Divider/>
      <AddToCart
        productId={id}
        increment={addToCart}
        decrement={subtractFromCart}
        qty={qty}
      />
    </Card>
  );
};

msCard.propTypes = {
  product: PropTypes.obj,
  addToCart: PropTypes.func,
  subtractFromCart: PropTypes.func,
  qty: PropTypes.num,
};

msCard.defaultProps = {
  product: {},
  addToCart: null,
  subtractFromCart: null,
  qty: 0,
};

export default msCard;
