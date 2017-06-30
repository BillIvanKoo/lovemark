import React from 'react';
import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import brilliance_homepage from '../assets/home/brilliance_homepage.png';

const BrillianceCard = () => (
  <div
    style={{
      position: 'relative',
      padding: '5%',
    }}
  >
    <Image
      src={brilliance_homepage}
      style={{
        position: 'relative',
      }}
      responsive
    />
    <div
      style={{
        position: 'absolute',
        left: '12.5%',
        verticalAlign: 'center',
        bottom: '35%',
        color: 'white',
        fontFamily: 'serif',
        textShadow: '0.5px 0.5px black',
        textAlign: 'Center',
        lineHeight: 1,
      }}
    >
      <p
        style={{
          fontSize: '1.5vw',
        }}
      >
      Mark The Moment
      </p>
      <p
        style={{
          fontSize: '4vw',
        }}
      >
        Brilliance
      </p>
      <p
        style={{
          fontSize: '1.5vw',
        }}
      >
      Give some sparkles to the one who gives her all.
      </p>
      <Link to="/collections/brilliance">
        <Button
          style={{
            fontSize: '1.5vw',
          }}
        >
          Discover
        </Button>
      </Link>
    </div>
  </div>
)

export default BrillianceCard;
