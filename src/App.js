import React from "react";
import "./App.css";
import { useState } from "react";

import AppTitle from "./components/AppTitle";
import Footer from "./components/layout/footer";
import NewExpense from "./components/newExpense/newExpense";
import Expenses from "./components/expense/Expenses";
import Chart from "./components/chart/chart";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const submitSetExpenses = (NewExpense) =>
    setExpenses([NewExpense, ...expenses]);

  return (
    <div className="App container">
      <AppTitle />

      <NewExpense setExpenses={submitSetExpenses} />
      <Chart expenses={expenses} />
      <Expenses expenses={expenses} />

      <Footer date={new Date().getFullYear()} />
    </div>
  );
};

export default App;
