
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/UserInput/NewExpense';
import React, { useState } from 'react';

const initial_expenses = [
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
    date: new Date(2021, 7, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initial_expenses);

  function addExpenseHandler(expense) {
    console.log('In App.js');
    console.log(expense);
    setExpenses((PrevExpenses) => {
      console.log("addExpenseHandler", PrevExpenses);
      return [expense, ...PrevExpenses];
    }); 
  }
  
  class ContainerRow extends React.Component {
    render(){
      return (
        <div className="rowC">
          <Expenses items={expenses} />
          <NewExpense onAddExpense={addExpenseHandler}/>
        </div>
      );
    }
  }

  return (
    <div>
      <h1>Welcome to my Expense App</h1>
      <br /><br />
      <ContainerRow />
    </div>
  );
}

export default App;