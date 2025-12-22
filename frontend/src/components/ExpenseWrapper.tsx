import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import type { Expense } from "../types";
import { v4 as uuidv4 } from "uuid";
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseWrapper = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <ExpenseForm addExpense={addExpense} />
        <table className="w-160 h-80 shadow-sm rounded-2xl">
          <tbody className="flex flex-col p-4 gap-3">
            {expenses.map((expense, index) => (
              <ExpenseItem item={expense} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
