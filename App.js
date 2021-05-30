import React from 'react';
import AppNavigation from './App/Navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './App/redux-store/store';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    )
  }

}

export default App;
