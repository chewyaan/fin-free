import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import type { Expense } from "../types";

export const ExpenseWrapper = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <>
        <ExpenseForm addExpense={addExpense} />
    </>
  );
};
