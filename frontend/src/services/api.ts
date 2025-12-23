import axios from "axios";
import type { Expense } from "../types";

const api = axios.create({ baseURL: "http://localhost:8080/api/v1" });

// GET
export const getAllExpenses = () =>
  api.get("/expenses").then((response) => {
    const array: object[] = response.data;
    array.map((item) => {
      const expense = item as Expense;
      
    });
  });

// POST
export const insertExpense = (expense: Expense) => {
  api
    .post("/expenses", {
      date: expense.date,
      amount: expense.amount,
      category: expense.category,
      description: expense.description,
    })
    .then((response) => {
      // **Is response.data a JSON object? or string?**
      // const myArray = JSON.parse(response.data);
    });
};

// DELETE
export const deleteAllExpenses = () => {
  api.delete("/expenses").then((response) => {
    console.log(`Expense list cleared successfully: ${response.data}`);
  });
};
