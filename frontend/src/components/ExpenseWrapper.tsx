import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";

export const ExpenseWrapper = () => {

    const [expenses, setExpenses] = useState([]);

  return <ExpenseForm/>;
};
