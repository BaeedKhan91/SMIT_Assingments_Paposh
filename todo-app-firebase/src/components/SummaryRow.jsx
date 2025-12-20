import React from "react";

// Assuming a currency formatter utility exists:
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
};

export default function SummaryRow({ income, expense, balance }) {
  // Determine color for balance based on its value
  const balanceColor = balance >= 0 ? "from-indigo-600 to-indigo-800" : "from-red-600 to-red-800";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="p-6 rounded-2xl shadow-xl bg-gradient-to-r from-green-500 to-green-600 text-white text-center transition hover:shadow-2xl">
        <p className="text-md font-medium opacity-90">Total Income</p>
        <h2 className="text-3xl font-extrabold mt-1">
          {formatCurrency(income)}
        </h2>
      </div>

      <div className="p-6 rounded-2xl shadow-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-center transition hover:shadow-2xl">
        <p className="text-md font-medium opacity-90">Total Expense</p>
        <h2 className="text-3xl font-extrabold mt-1">
          {formatCurrency(expense)}
        </h2>
      </div>

      <div className={`p-6 rounded-2xl shadow-xl bg-gradient-to-r ${balanceColor} text-white text-center transition hover:shadow-2xl`}>
        <p className="text-md font-medium opacity-90">Net Balance</p>
        <h2 className="text-3xl font-extrabold mt-1">
          {formatCurrency(balance)}
        </h2>
      </div>
    </div>
  );
} 