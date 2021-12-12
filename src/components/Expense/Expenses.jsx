import React, {useState} from 'react';
import './Expenses.css'
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = ({expenses}) => {

   
    const [filteredYear, setFilteredYear] = useState('2021')

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

        <ExpensesChart expenses={filteredExpenses}/>

      <ExpensesList expenses={filteredExpenses}/>

        </Card>
    )
}

export default Expenses;