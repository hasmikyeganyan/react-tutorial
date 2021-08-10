import React from 'react';
import './App.css';

import ExpenseItemTitle from './components/expense/ExpenseTitle';
import AppTitle from './components/AppTitle';
import Footer from './components/layout/footer';
import NewExpense from './components/newExpense/newExpense';
import Expenses from './components/expense/Expenses';

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
      
      <NewExpense />
      
     <Expenses expenses={expenses}/>
    <Footer date={new Date().getFullYear()} />
    </div> 
  );
};


export default App;
 