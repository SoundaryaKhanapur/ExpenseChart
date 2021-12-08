import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({  title,
    amount,
    date}) => {

       const [changetitle, setTitle] = useState(title);

        const clickHandler = () => {
setTitle('Updated')
            console.log('Clicked!!!')
        }

    return (
        <li>
        <Card className="expense-item">
            {/* below is props children */}
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{changetitle}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
        </li>
    );
}

export default ExpenseItem;