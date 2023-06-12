import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

// function App() {
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 294.67,
      date: new Date(2023, 1, 28),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 294.67,
      date: new Date(2023, 2, 21),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 214.67,
      date: new Date(2023, 3, 28),
    },
    {
      id: "e4",
      title: "Medical",
      amount: 299.67,
      date: new Date(2023, 3, 23),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
