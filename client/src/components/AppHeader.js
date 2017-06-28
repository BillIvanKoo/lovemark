import React from 'react';
import { Image } from 'react-bootstrap';

import TopNav from './TopNav';
import lovemark_logo from '../assets/lovemark_logo.png';

const AppHeader = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      zIndex: 1,
      width: '100%',
      backgroundColor: 'white',
    }}
  >
    <Image
      src={lovemark_logo}
      alt="lovemark_logo"
      responsive
      style={{
        display: 'block',
        margin: 'auto',
        marginTop: '-30px',
        marginBottom: '-40px',
      }}
    />
    <TopNav />
  </div>
);

export default AppHeader