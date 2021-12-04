import './Expenses.css'
import ExpenseItem from './ExpenseItem';

const Expenses = ({  title,
    amount,
    date}) => {
    return (
        <div className="expenses">
            <ExpenseItem  title={title} 
          amount={amount} 
          date={date}  />
        </div>
    )
}

export default Expenses;