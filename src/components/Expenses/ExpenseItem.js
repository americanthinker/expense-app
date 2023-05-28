import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
// import MyButton from '../Buttons/MyButton';
// import { useState } from 'react';

function ExpenseItem(props) {
    //Change title on click
    // const [title, setTitle] = useState(props.title);
    // const items = ['Dog', 'Cat', 'Bird', 'Fish', 'Lizard', 
    //                 'Snake', 'Turtle', 'Hamster', 'Rabbit', 
    //                 'Guinea Pig', 'Ferret', 'Mouse', 'Rat',
    //                 'Hedgehog', 'Sugar Glider', 'Chinchilla',
    //                 'Hermit Crab', 'Gerbil', 'Pot Bellied Pig',
    //                 'Tarantula', 'Scorpion', 'Axolotl', 'Frog',
    //                 'Toad', 'Salamander', 'Newt', 'Gecko',
    //                 'Bearded Dragon', 'Iguana', 'Chameleon',
    //                 'Tortoise', 'Snail', 'Slug', 'Millipede',
    //                 'Centipede', 'Cricket', 'Praying Mantis',
    //                 'Walking Stick', 'Cockroach', 'Ladybug',
    //                 'Butterfly', 'Moth', 'Caterpillar', 'Worm',
    //                 'Bee', 'Wasp', 'Ant', 'Dragonfly', 'Grasshopper']
    // const randomItem = items[Math.floor(Math.random()*items.length)];
    // const clickHandler = () => {
    //     setTitle(randomItem);
    // };
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;