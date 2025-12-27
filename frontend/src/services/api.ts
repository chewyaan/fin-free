import axios from "axios";
import type { Expense } from "../types";

const api = axios.create({ baseURL: "http://localhost:8080/api/v1" });

// GET (*Needs Review*)
export const getAllExpenses = async (): Promise<Expense[]> => {
  try {
    const response = await api.get("/expenses");
    return response.data as Expense[];
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return [];
  }
};

// POST (*UPDATE THIS* to async)
export const insertExpense = (expense: Expense): Expense => {
  let expenseFromDb: Expense = expense;

  api
    .post("/expenses", {
      date: expense.date,
      amount: expense.amount,
      category: expense.category,
      description: expense.description,
    })
    .then((response) => {
      // Typecast received JS Object to Expense
      const respObj: object = response.data;
      expenseFromDb = respObj as Expense;
    });

  return expenseFromDb;
};

// DELETE (*UPDATE THIS* to async)
export const deleteAllExpenses = () => {
  api.delete("/expenses").then((response) => {
    console.log(`Expense list cleared successfully: ${response.data}`);
  });
};

// DELETE
export const deleteExpense = async (id: number): Promise<void> => {
  try {
    await api.delete(`/expenses/${id}`);
    console.log(`Expense: id=${id} successfully removed!`); 
  } catch (error) {
    console.error(`Error deleting expense with id=${id}: `, error);
    throw(error);
  }
}
