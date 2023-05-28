import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense (props) {
    function submitExpenseHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: (1 + Math.random()).toString()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSubmitExpense={submitExpenseHandler}/>
        </div>
    );
}

export default NewExpense;