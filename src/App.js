
import Profile from './components/Profile';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/UserInput/NewExpense';
import React from 'react';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450.01,
      date: new Date(2021, 5, 12),
    },
  ];

  class ContainerRow extends React.Component {
    render(){
      return (
        <div className="rowC">
          <Expenses items={expenses} />
          <NewExpense />
        </div>
      );
    }
  }
  return (
    <div>
      <h1>Welcome to my Expense App</h1>
      <br />
      {/* <Profile /> */}
      <br />
      <ContainerRow />
      {/* <div>
        <Expenses items={expenses} />
        <NewExpense />
      </div> */}
    </div>
  );
}

export default App;