import React from 'react';
class DashboardContainer extends React.Component {
  constructor(props){
    super(props);
    console.log('app', this.props.app);
  }

  render(){
    return (
      <div>
        <p> hello dashboard </p>
      </div>
    );
  }
}

export default DashboardContainer;
