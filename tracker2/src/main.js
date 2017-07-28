import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import AboutContainer from './component/about-container';
import DashboardContainer from './component/dashboard-container';

class App extends React.Component {
  render(){
    return (
      <main className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={DashboardContainer} />
            <Route exact path='/about' component={AboutContainer} />
          </div>
        </BrowserRouter>
        <h1> hello world {this.props.title} </h1>
      </main>
    );
  }
}

ReactDom.render(<App title='from prop' />, document.getElementById('root'));
