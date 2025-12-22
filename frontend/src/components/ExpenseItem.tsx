import type { Expense } from "../types";

export const ExpenseItem = ({ item }: { item: Expense }) => {
  return (
    <tr className="flex rounded-md ring-1 ring-gray-900/30">
      <td className="p-2 border-r-1 border-gray-900/30">{item.date}</td>
      <td className="p-2 border-r-1 border-gray-900/30">{item.category}</td>
      <td className="p-2 border-r-1 border-gray-900/30">{item.description}</td>
      <td className="p-2">${item.amount}</td>
    </tr>
  );
};
