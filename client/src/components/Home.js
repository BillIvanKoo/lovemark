import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';

import BrillianceCard from './BrillianceCard';
import VowCard from './VowCard';
import homepage_citylight from '../assets/home/homepage_citylight.png';
import homepage_heritage from '../assets/home/homepage_heritage.png';

class Home extends Component {
  render() {
    return (
      <div>
        <BrillianceCard />
        <VowCard />
        <div style={{ margin: '3.775%' }}>
          <Col
            xs={12}
            md={6}
          >
            <Image
              src={homepage_heritage}
              responsive
            />
          </Col>
          <Col
            xs={12}
            md={6}
          >
            <Image
              src={homepage_citylight}
              responsive
            />
          </Col>
        </div>
      </div>
    );
  }
}

export default Home;
