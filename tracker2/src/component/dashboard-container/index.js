import React from 'react';
import Navbar from '../navbar';
import uuid from 'uuid/v1';

class DashboardContainer extends React.Component {
  constructor(props){
    super(props);

    this.expenseCreate = this.expenseCreate.bind(this);
  }

  //hooks
  //methods
  expenseCreate(expense){
    let {app} = this.props;

    expense.id = uuid();
    app.setState(prevState => {
      //imutably add the new expense to the old expense array on apps state
      expenses: prevState.expenses.concat([expense]);
    });
  }

  //render
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
