import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import  reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      authDomain: 'manager-9839d.firebaseapp.com',
      databaseURL: 'https://manager-9839d.firebaseio.com',
      projectId: 'manager-9839d',
      storageBucket: 'manager-9839d.appspot.com',
      messagingSenderId: '654968648453',
      appId: '1:654968648453:web:7ec1a3d492c5890727bd6c'
    };

    firebase.initializeApp(firebaseConfig);
  }

  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


export default App;
