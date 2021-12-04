import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <ExpenseDate date={new Date(2020, 10, 18)} />
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">300</div>
            </div>
        </div>
    );
}

export default ExpenseItem;