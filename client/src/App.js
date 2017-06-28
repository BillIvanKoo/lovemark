import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import TopNav from './components/TopNav';
import lovemark_logo from './assets/lovemark_logo.png';

class App extends Component {
  render() {
    return(
      <div>
        <Image
          src={lovemark_logo}
          alt="lovemark_logo"
          responsive
          style={{
            display: 'block',
            margin: 'auto'
          }}
        />
        <TopNav />
      </div>
    );
  }
}

export default App;
