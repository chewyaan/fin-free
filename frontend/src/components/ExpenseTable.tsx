import type { Expense } from "../types";
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseTable = ({ expenses }: {expenses: Expense[]}) => {
  return (
    <table className="w-160 h-80 shadow-sm rounded-2xl">
      <tbody className="flex flex-col p-4 gap-3">
        {expenses.map((expense, index) => (
          <ExpenseItem item={expense} key={index} />
        ))}
      </tbody>
    </table>
  );
};
