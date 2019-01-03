import { createStackNavigator, createAppContainer } from 'react-navigation';
import ShopContainer from '../containers/ShopContainer';
import CartContainer from '../containers/CartContainer';

const AppNavigator = createStackNavigator({
  Home: {
    screen: ShopContainer,
    navigationOptions: {
      title: 'Home',
      header: null,
    },
  },
  Cart: {
    screen: CartContainer,
    navigationOptions: {
      title: 'Cart',
      header: null,
    },
  },
  initialRouteName: 'Home',
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);
