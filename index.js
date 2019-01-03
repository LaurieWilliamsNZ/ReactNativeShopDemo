import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';


const Root = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

AppRegistry.registerComponent(appName, () => App);

export default Root;
