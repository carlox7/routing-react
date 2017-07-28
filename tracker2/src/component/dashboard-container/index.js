import React from 'react';
import Navbar from '../navbar';

class DashboardContainer extends React.Component {
  render() {
    return(
      <div className='dashboard-container'>
        <Navbar />
        <p>dashboard</p>
      </div>
    );
  }
}

export default DashboardContainer;
