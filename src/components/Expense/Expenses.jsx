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

    let expensesContent = <p>No expenses found!</p>;

    if(filteredExpenses.length > 0 ){
        expensesContent = filteredExpenses.map(({
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
        })
    }

    return (
        <Card className="expenses">
        <ExpenseFilter 
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
        />

      {expensesContent}
      
      
        </Card>
    )
}

export default Expenses;