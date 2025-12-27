import { deleteExpense } from "../services/api";
import type { Expense } from "../types";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { cadFormatter } from "../services/currencyFormatter";

export const ExpenseItem = ({ item }: { item: Expense }) => {
  return (
    <tr className="flex rounded-md ring-1 ring-gray-900/30">
      <td className="p-2 border-r-1 border-gray-900/30">{item.date}</td>
      <td className="p-2 border-r-1 border-gray-900/30">{item.category}</td>
      <td className="p-2 border-r-1 border-gray-900/30">{item.description}</td>
      <td className="p-2">{cadFormatter.format(item.amount)}</td>
      <td className="flex items-center ml-auto">
        <button
          type="button"
          className="p-2 mr-1 cursor-pointer rounded-lg bg-gray-100 hover:bg-red-400 hover:text-white"
          onClick={() => deleteExpense(item.id)}
        >
          <MdOutlineDeleteOutline />
        </button>
      </td>
    </tr>
  );
};
