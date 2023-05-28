import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import TotalExpenses from './TotalExpenses';
import { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setYear] = useState('2019');
    function filterYearHandler(filteredYear) {
        setYear(filteredYear);
        };
    const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear
    });
    console.log("Filtereed Objects", filteredExpenses);
    let total_sum = 0;
    filteredExpenses.map((expense) => (
        total_sum += expense.amount
    ))
    return (
            <div className="expenses">
                <ExpensesFilter defaultYear={filteredYear} onSelectYear={filterYearHandler}/>
                {/* Map each <ExpenseItem using props.items*/}
                {filteredExpenses.map((expense) => (
                  <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                  />))}
                <TotalExpenses sum={total_sum}/>
            </div>
    );
}

export default Expenses;