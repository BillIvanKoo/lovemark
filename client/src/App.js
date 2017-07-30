import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppHeader from './components/AppHeader';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import Login from './components/Login'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <AppHeader />
            <div style={{marginTop: '110px'}}>
              <Route exact path="/" component={Home} />
              <Route exact path="/jewellery" component={ProductList} />
              <Route path="/jewellery/:type" component={ProductList} />
              <Route path="/collections/:category" component={ProductList} />
              <Route path="/product/:id" component={ProductPage} />
              <Route path="/login" component={Login} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
