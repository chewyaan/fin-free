import { useState } from "react";
import { deleteExpense } from "../services/api";
import type { Expense } from "../types";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { cadFormatter } from "../services/currencyFormatter";

export const ExpenseItem = ({ item }: { item: Expense }) => {
  const [date, setDate] = useState<string>(item.date);
  const [amount, setAmount] = useState<string>(item.amount.toString());
  const [category, setCategory] = useState<string>(item.category);
  const [description, setDescription] = useState<string>(item.description);

  return (
    <tr className="flex rounded-md ring-1 ring-gray-900/30 hover:bg-gray-50">
      <td className="p-2 border-r-1 border-gray-900/30">
        <input
          className="p-1 w-25 hover:bg-gray-100 focus:bg-white focus:ring-3 focus:ring-teal-900 rounded-md"
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </td>
      <td className="p-2 border-r-1 border-gray-900/30">
        <input
          className="p-1 w-50 hover:bg-gray-100 focus:bg-white focus:ring-3 focus:ring-teal-900 rounded-md"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </td>
      <td className="p-2 border-r-1 border-gray-900/30">
        <input
          className="p-1 w-50 hover:bg-gray-100 focus:bg-white focus:ring-3 focus:ring-teal-900 rounded-md"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </td>
      <td className="p-2">
        <input
          className="p-1 w-50 hover:bg-gray-100 focus:bg-white focus:ring-3 focus:ring-teal-900 rounded-md"
          type="number"
          placeholder={cadFormatter.format(item.amount)}
          // * NEED TO IMPLEMENT *
        />
      </td>
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
