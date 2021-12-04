import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from './Card';

const Expenses = ({  title,
    amount,
    date}) => {
    return (
        <Card className="expenses">
            <ExpenseItem  title={title} 
          amount={amount} 
          date={date}  />
        </Card>
    )
}

export default Expenses;