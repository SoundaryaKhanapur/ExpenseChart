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

    return (
        <Card className="expenses">
        <ExpenseFilter 
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
        />
            {
        expenses.map(({
          title,
          amount,
          date
        }) => {
          
          return <ExpenseItem 
          title={title} 
          amount={amount} 
          date={date} 
          />
        })
      }
      
        </Card>
    )
}

export default Expenses;