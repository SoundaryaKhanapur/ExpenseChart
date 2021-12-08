import React, {useState} from 'react';
import './Expenses.css'
import ExpensesList from './ExpensesList';
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

      <ExpensesList expenses={filteredExpenses}/>
      
      
        </Card>
    )
}

export default Expenses;