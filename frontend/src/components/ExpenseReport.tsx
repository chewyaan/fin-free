export const ExpenseReport = ({ expenseTotal }: { expenseTotal: number }) => {
  return (
    <div className="flex flex-col items-center p-4 gap-2 w-80 shadow-sm rounded-2xl">
      <h1 className="text-xl text-teal-900">
        Expense Report
      </h1>
    </div>
  );
};
