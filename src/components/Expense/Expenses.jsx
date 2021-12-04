import './Expenses.css'
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    return (
        <div className="expenses">
            <ExpenseItem expenses={props.expenses} />
        </div>
    )
}

export default Expenses;