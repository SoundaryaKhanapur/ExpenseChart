import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = ({  title,
    amount,
    date}) => {
    return (
        <Card >
            <ExpenseItem  title={title} 
          amount={amount} 
          date={date}  />
        </Card>
    )
}

export default Expenses;