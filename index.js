// /**
//  * @format
//  */
//  import React,{Component} from 'react'
//  import {AppRegistry} from 'react-native';
//  import Apps from './src/PHP/Lab3/Bai1/App';
//  import {name as appName} from './app.json';
//  //redux
//  import {Provider} from 'react-redux'
//  import {createStore} from 'redux'
//  import CouterContainer from './src/redux-saga/container/CouterContainer';
//  import allReducers from './src/redux-saga/reducer';
// import { appendFile } from 'react-native-fs';
//  let store=createStore(allReducers);
//   const App=()=>{
//      <Provider store={store}>
//          <CouterContainer/>
//      </Provider>
//  }

//  AppRegistry.registerComponent(appName, () => App);
//  export default App;
/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
//Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './src/redux/reducers';
import MovieContainer from './src/navigations/App';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/redux/sagas/rootSaga';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
  <Provider store={store}>
    <MovieContainer />
  </Provider>
);
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => App);
