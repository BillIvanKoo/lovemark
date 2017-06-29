import React from 'react';
import { Image, Button } from 'react-bootstrap';

import vow_homepage from '../assets/home/vow_homepage.png';

const VowCard = () => (
  <div
    style={{
      position: 'relative',
      margin: '5%',
      marginTop: 0,
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
    <Button
      style={{
        position: 'absolute',
        bottom: '15%',
        right: '26.5%',
        fontSize: '1.5vw',
      }}
    >
      Browse
    </Button>
  </div>
)

export default VowCard;