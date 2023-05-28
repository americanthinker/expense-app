import './ExpenseForm.css'
import { useState } from 'react';
// import ParseDate from '../Expenses/ParseDate';

function ExpenseForm (props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    function submitHandler(event) {
        event.preventDefault();
        // const date = ParseDate(new Date(enteredDate));
        const expenseData = {
            title: enteredTitle,
            amount: Number(enteredAmount),
            date: new Date(enteredDate),
            // month: date.month,
            // year: date.year,
            // day: date.day,
        };
        props.onSubmitExpense(expenseData);        
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
        }
    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
        }
    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
        }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                    type='text' 
                    value={enteredTitle}
                    onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                    type='number'
                    value={enteredAmount}
                    min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                    type='date' 
                    value={enteredDate}
                    min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;