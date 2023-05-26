import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
// import MyButton from '../Buttons/MyButton';
import '../Buttons/MyButton.css';

import { useState } from 'react';

function ExpenseItem(props) {
    //Change title on click
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        const newTitle = title + ' ' + (Math.random()).toString().substring(0, 4);
        setTitle(newTitle);
    };
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Click Me!</button>
        </div>
    );
}

export default ExpenseItem;