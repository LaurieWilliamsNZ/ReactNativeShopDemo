import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  qtyView: {
    flex: 2,
    alignItems: 'center',
  },
  qtyText: {
    fontSize: 40,
    textAlign: 'center',
  },
  btnAdd: {
    backgroundColor: '#FFC08A',
  },
  btnMinus: {
    backgroundColor: '#9DE4A2',
  },
});

const AddToCart = ({
  productId = null,
  increment = null,
  decrement = null,
  qty = 0,
}) => (
  <View style={styles.container}>
    <View flex={2}>
      <Button
        onPress={() => decrement(productId)}
        title="-"
        fontSize={40}
        buttonStyle={styles.btnAdd}
      />
    </View>
    <View style={styles.qtyView}>
      <Text style={styles.qtyText}>
        {qty}
      </Text>
    </View>
    <View flex={2} >
      <Button
        onPress={() => increment(productId)}
        title="+"
        fontSize={40}
        buttonStyle={styles.btnMinus}
      />
    </View>
  </View>
);

AddToCart.propTypes = {
  productId: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  qty: PropTypes.number,
};

AddToCart.defaultProps = {
  qty: 0,
};

export default AddToCart;
