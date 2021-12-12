import React, {useState} from 'react'
import Expenses from './components/Expense/Expenses';
import './components/Expense/Expenses.css';
import NewExpense from './components/NewExpense/NewExpense';

const initialExpenses = [
  {
    id: 'e1',
    title: 'Walnuts',
    amount: '450',
    date: new Date(2020, 10, 18),
  },

  {
    id: 'e2',
    title: 'Almonds',
    amount: '350',
    date: new Date(2020, 10, 18),
  },
  
];

const App = () => {

 const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = expense => {
    // setExpenses([expense, ...expenses])


    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>

  <div >
     
     <Expenses expenses={expenses}/>
    </div>
</div>


   
  );
}

export default App;
