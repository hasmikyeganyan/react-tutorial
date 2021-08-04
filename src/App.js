import React from 'react';
import './App.css';
import ExpenseItem from './components/expense/ExpenseItem';
import ExpenseItemTitle from './components/expense/ExpenseTitle';
import AppTitle from './components/AppTitle';

const App=() =>{
  const expenses=[
    {
    title:'Loan',
    price :100,
    date:new Date(20210,3,15),
    status:'Favorite',
    },
    {
      title:'Car Insurance',
      price :300,
      date:new Date(),
      status:'Expensive'
      },
      {
        title:'Shopping',
        price :200,
        date: new Date(2020, 4 , 20),
        status:'Good',
        },
  ];
return (
    <div className="App container">
      <AppTitle />
      <br />
      <ExpenseItem  title={expenses[0].title} price ={expenses[0].price} date={expenses[0].date} status={expenses[0].status} />
      <ExpenseItem title={expenses[1].title} price ={expenses[1].price} date={expenses[1].date} status={expenses[1].status}/>
      <ExpenseItem title={expenses[2].title} price ={expenses[2].price} date={expenses[2].date} status={expenses[2].status} />
    </div> 
  );
}


export default App;
 