import { useState } from "react";
import { getAllExpenses, insertExpense } from "../src/services/api";

function App() {
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <>
      <div className="flex flex-col items-center gap-4 mx-auto w-1/4 shadow-md rounded-md">
        <h1>FinFree: Smart Budget Tracking</h1>
        <div className="flex p-4">
          <div>
            <div className="border-1 border-gray-200 rounded-md">
              <input
                type="number"
                placeholder="Amount ($)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="border-1 border-gray-200 rounded-md">
              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="border-1 border-gray-200 rounded-md">
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              className="flex cursor-pointer rounded-md p-2 text-white bg-emerald-300 hover:bg-emerald-400"
              onClick={() => insertExpense(parseFloat(amount), category, description)}
            >
              Add Expense
            </button>
          </div>
        </div>
        <button
          className="w-50 cursor-pointer rounded-md border-1 p-2"
          onClick={() => getAllExpenses()}
        >
          Get Expense List
        </button>
      </div>
    </>
  );
}

export default App;
