import Expenses from './components/Expense/Expenses';
import './components/Expense/Expenses.css';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Walnuts',
      amount: '450',
      date: new Date(2020, 10, 18),
    },
    {
      id: 'e2',
      title: 'Walnuts',
      amount: '450',
      date: new Date(2020, 10, 18),
    },
    {
      id: 'e3',
      title: 'Walnuts',
      amount: '450',
      date: new Date(2020, 10, 18),
    },
    {
      id: 'e4',
      title: 'Walnuts',
      amount: '450',
      date: new Date(2020, 10, 18),
    },
    {
      id: 'e5',
      title: 'Walnuts',
      amount: '450',
      date: new Date(2020, 10, 18),
    },
    {
      id: 'e6',
      title: 'Walnuts',
      amount: '450',
      date: new Date(2020, 10, 18),
    },

  ]

  const addExpenseHandler = expense => {
    console.log("app jssssssssssss")
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>

    <div className="expenses">
      {
        expenses.map(({
          title,
          amount,
          date
        }) => {
          
          return <Expenses 
          title={title} 
          amount={amount} 
          date={date} 
          />
        })
      }
     
    </div>
    </div>
  );
}

export default App;
