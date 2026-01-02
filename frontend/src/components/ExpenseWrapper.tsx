import { useEffect, useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import type { Expense } from "../types";
// import { v4 as uuidv4 } from "uuid";
import { getAllExpenses } from "../services/api";
import { ExpenseTable } from "./ExpenseTable";
import { ExpenseReport } from "./ExpenseReport";

export const ExpenseWrapper = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getAllExpenses();
        setExpenses(data);
      } catch (error) {
        console.error("Failed to fetch expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <ExpenseForm addExpense={addExpense} />
          <ExpenseReport/>
        </div>
        <ExpenseTable expenses={expenses} />
      </div>
    </>
  );
};
