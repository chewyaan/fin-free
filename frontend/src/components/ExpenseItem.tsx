import type { Expense } from "../types";
import { MdOutlineDeleteOutline } from "react-icons/md";

export const ExpenseItem = ({ item }: { item: Expense }) => {
  return (
    <div className="flex gap-2">
      <tr className="flex rounded-md ring-1 ring-gray-900/30">
        <td className="p-2 border-r-1 border-gray-900/30">{item.date}</td>
        <td className="p-2 border-r-1 border-gray-900/30">{item.category}</td>
        <td className="p-2 border-r-1 border-gray-900/30">
          {item.description}
        </td>
        <td className="p-2">${item.amount}</td>
      </tr>
      <button
        type="button"
        className="cursor-pointer rounded-lg bg-gray-100 hover:bg-red-400 hover:text-white p-2"
      >
        <MdOutlineDeleteOutline />
      </button>
    </div>
  );
};
