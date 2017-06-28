import React from 'react';
import { Image } from 'react-bootstrap';

import brilliance_homepage from '../assets/brilliance_homepage.png';

const BrillianceCard = () => (
  <div
    style={{
      position: 'relative',
      margin: '5%',
    }}
  >
    <Image
      src={brilliance_homepage}
      style={{
        position: 'relative',
      }}
      responsive
    />
  </div>
)

export default BrillianceCard;
