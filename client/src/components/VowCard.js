import React from 'react';
import { Image } from 'react-bootstrap';

import vow_homepage from '../assets/vow_homepage.png';

const VowCard = () => (
  <div
    style={{
      position: 'relative',
      margin: '5%',
    }}
  >
    <Image
      src={vow_homepage}
      responsive
      style={{
        display: 'block',
        margin: 'auto',
      }}
    />
  </div>
)

export default VowCard;