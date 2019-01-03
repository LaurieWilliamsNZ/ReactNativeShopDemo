import React from 'react';
import { Header, Icon } from 'react-native-elements';


const msHeader = navigation => (
  <Header
    backgroundColor="#5CA4A9"
    centerComponent={{ text: 'MITRE 20', style: { color: '#fff', fontSize: 20 } }}
    rightComponent={
      navigation.showCart ? <Icon
        onPress={() => navigation.nav.navigate('Cart')}
        name='shopping-cart'
        color='white'
        fontSize={30}
      /> : null}
    leftComponent={
      navigation.canGoBack ? <Icon
        onPress={() => navigation.nav.goBack()}
        name='ios-arrow-back'
        color='white'
        type="ionicon"
      /> : null}
    />
);


export default msHeader;
