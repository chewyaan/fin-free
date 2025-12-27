import type { Expense } from "../types";
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseTable = ({ expenses }: { expenses: Expense[] }) => {
  return (
    <table className="w-160 h-80 shadow-sm rounded-2xl">
      <tbody className="flex flex-col p-4 gap-3">
        <tr className="flex rounded-md">
          <th className="w-15">Date</th>
          <th className="w-50">Category</th>
          <th className="w-65">Description</th>
          <th className="w-45">Amount ($)</th>
        </tr>
        {expenses.map((expense, index) => (
          <ExpenseItem item={expense} key={index} />
        ))}
      </tbody>
    </table>
  );
};
