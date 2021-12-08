import React, {useState} from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = ({expenses}) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
        
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className="expenses">
        <ExpenseFilter 
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
        />
        {filteredExpenses.length === 0 ? 
        <p>No expenses found!</p> :  
        filteredExpenses.map(({
            id,
          title,
          amount,
          date
        }) => {
          
          return <ExpenseItem 
          key={id}
          title={title} 
          amount={amount} 
          date={date} 
          />
        })}
      
      
        </Card>
    )
}

export default Expenses;