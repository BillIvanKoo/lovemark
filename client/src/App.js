import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppHeader from './components/AppHeader';
import Home from './components/Home';
import store from './store';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <AppHeader />
            <div style={{marginTop: '150px'}}>
              <Route exact path="/" component={Home} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
