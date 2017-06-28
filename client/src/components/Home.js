import React, { Component } from 'react';

import BrillianceCard from './BrillianceCard';
import VowCard from './VowCard';

class Home extends Component {
  render() {
    return(
      <div>
        <BrillianceCard />
        <VowCard />
      </div>
    );
  }
}

export default Home;
