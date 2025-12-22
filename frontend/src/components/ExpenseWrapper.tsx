import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import type { Expense } from "../types";
import { v4 as uuidv4 } from "uuid";
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseWrapper = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
    console.log(expense);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <ExpenseForm addExpense={addExpense} />
        {expenses.map((expense, index) => (
          <ExpenseItem item={expense} key={index} />
        ))}
      </div>
    </>
  );
};
