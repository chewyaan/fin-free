import type { Expense } from "../types";

export const ExpenseItem = ({ item }: { item: Expense }) => {
  return (
    <div className="w-50 bg-blue-500">
      <p>{item.description}</p>
    </div>
  );
};
