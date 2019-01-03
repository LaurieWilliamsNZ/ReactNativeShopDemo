import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers/index';
import AppNavigator from './src/routing/AppNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EBE0',
  },
});

const App = () => {
  /*
    Should create a seperate configureStore.js file for addtional middleware.
    Such as rxjs or redux-persist.
    TODO: move creareStore into store/configureStore.js
  */
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

export default App;
