import React from 'react';
import './App.css';
import ExpenseItem from './components/Expenseitem';
import ExpenseItemTitle from './components/ExpenseItemTitle';
import AppTitle from './components/AppTitle';

function App() {
  const expenses=[
    {
    title:'Loan',
    price :100,
    date:new Date(20210,3,15),
    },
    {
      title:'Car Insurance',
      price :300,
      date:new Date(),
      },
      {
        title:'Shopping',
        price :200,
        date: new Date(2020, 4 , 20),
        },
  ];
return (
    <div className="App container">
      <AppTitle />
      <br />
      <ExpenseItem  title={expenses[0].title} price ={expenses[0].price} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} price ={expenses[1].price} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} price ={expenses[2].price} date={expenses[2].date} />
    </div> 
  );
}


export default App;
 