import { useState } from "react";
import {
  getAllExpenses,
  insertExpense,
  deleteAllExpenses,
} from "../services/api.ts";
import { MdClear } from "react-icons/md";
import type { Expense } from "../types/index.ts";

export const ExpenseForm = ({addExpense}: {addExpense:Expense}) => {
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const expense: Expense = {
      amount: parseFloat(amount),
      category: category,
      description: description,
    };

    insertExpense(parseFloat(amount), category, description);
    addExpense(expense);
    
  };

  return (
    <form
      className="flex flex-col items-center p-4 gap-2 w-1/4 shadow-sm rounded-2xl"
      onSubmit={handleSubmit}
    >
      <h1 className="font-black text-teal-900">
        FinFree <span className="font-normal">Smart Budget Tracking</span>
      </h1>
      <div className="inset-shadow-sm rounded-lg">
        <input
          type="number"
          placeholder="Amount ($)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="inset-shadow-sm rounded-lg">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="inset-shadow-sm rounded-lg">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="flex cursor-pointer rounded-lg p-2 text-white bg-emerald-300 hover:bg-emerald-400"
      >
        Add Expense
      </button>
      <div className="flex gap-2">
        <button
          type="button"
          className="w-50 cursor-pointer rounded-lg p-2 bg-teal-800 hover:bg-teal-900 text-white"
          onClick={() => getAllExpenses()}
        >
          Get Expense List
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200 p-2"
          onClick={() => deleteAllExpenses()}
        >
          <MdClear />
        </button>
      </div>
    </form>
  );
};
