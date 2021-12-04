import Expenses from './components/Expense/Expenses';

function App() {

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
  return (
    <div >
      <Expenses elements={expenses} />
    </div>
  );
}

export default App;
