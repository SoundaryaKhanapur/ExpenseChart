import React, {useState} from 'react'
import Expenses from './components/Expense/Expenses';
import './components/Expense/Expenses.css';
import NewExpense from './components/NewExpense/NewExpense';

const initialExpenses = [
  {
    id: 'e1',
    title: 'Walnuts',
    amount: '450',
    date: new Date(2020, 12, 18),
  },

  {
    id: 'e2',
    title: 'Almonds',
    amount: '350',
    date: new Date(2020, 10, 18),
  },

  {
    id: 'e3',
    title: 'Orange',
    amount: '150',
    date: new Date(2021, 10, 18),
  },

  {
    id: 'e4',
    title: 'Dark Chocolate',
    amount: '170',
    date: new Date(2021, 9, 18),
  },
  {
    id: 'e5',
    title: 'Myntra',
    amount: '550',
    date: new Date(2021, 8, 1),
  },
  {
    id: 'e6',
    title: 'Cake',
    amount: '150',
    date: new Date(2020, 10, 28),
  },
  {
    id: 'e7',
    title: 'Petrol',
    amount: '100',
    date: new Date(2021, 7, 18),
  },
  {
    id: 'e8',
    title: 'Orange',
    amount: '150',
    date: new Date(2021, 5, 8),
  },
  {
    id: 'e9',
    title: 'Pineapple',
    amount: '50',
    date: new Date(2021,6, 9),
  },
  {
    id: 'e10',
    title: 'Strawberry',
    amount: '90',
    date: new Date(2021,2, 18),
  },

  {
    id: 'e11',
    title: 'Orange',
    amount: '150',
    date: new Date(2020,10, 18),
  },

  {
    id: 'e12',
    title: 'Dark Chocolate',
    amount: '170',
    date: new Date(2020,9, 18),
  },
  {
    id: 'e13',
    title: 'Myntra',
    amount: '550',
    date: new Date(2020,8, 1),
  },
  {
    id: 'e14',
    title: 'Cake',
    amount: '150',
    date: new Date(2020,10,28),
  },
  {
    id: 'e15',
    title: 'Petrol',
    amount: '100',
    date: new Date(2020,1,18),
  },
  {
    id: 'e16',
    title: 'Orange',
    amount: '150',
    date: new Date(2020,1,8),
  },
  {
    id: 'e17',
    title: 'Pineapple',
    amount: '50',
    date: new Date(2020,6,9),
  },
  {
    id: 'e18',
    title: 'Strawberry',
    amount: '90',
    date: new Date(2020,2,18),
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
