import React from "react";
import { Trash2, TrendingUp, TrendingDown } from "lucide-react";

// Assuming a currency formatter utility exists:
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
};

// Component for a single transaction item
const TransactionItem = ({ item, handleDelete }) => {
    const isIncome = item.type === "income";
    const iconColor = isIncome ? "text-green-500" : "text-red-500";
    const amountColor = isIncome ? "text-green-700" : "text-red-700";
    const Icon = isIncome ? TrendingUp : TrendingDown;

    return (
        <div
            className={`flex items-center justify-between p-4 bg-white border-l-4 ${isIncome ? 'border-green-500' : 'border-red-500'} rounded-xl shadow-sm hover:shadow-md transition duration-200`}
        >
            <div className={`mr-4 p-2 rounded-full ${isIncome ? 'bg-green-100' : 'bg-red-100'}`}>
                <Icon size={20} className={iconColor} />
            </div>

            <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 truncate">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-wider">{item.category}</p>
            </div>

            <p className={`font-bold text-lg mx-4 ${amountColor}`}>
                {formatCurrency(item.amount)}
            </p>

            <button
                onClick={() => handleDelete(item.id)}
                className="p-2 rounded-full hover:bg-red-100 transition"
                aria-label="Delete transaction"
            >
                <Trash2 size={18} className="text-red-500 hover:text-red-600" />
            </button>
        </div>
    );
};


export default function TransactionList({ transactions, handleDelete }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl h-full border border-gray-100">
            <h2 className="text-2xl font-extrabold text-indigo-700 text-center mb-6 border-b pb-3">
                Transaction History
            </h2>

            <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
                {transactions.length > 0 ? (
                    transactions.map((item) => (
                        <TransactionItem key={item.id} item={item} handleDelete={handleDelete} />
                    ))
                ) : (
                    <div className="text-center py-10 text-gray-500">
                        <p className="text-lg font-medium">No transactions yet.</p>
                        <p className="text-sm">Start by adding a new transaction!</p>
                    </div>
                )}
            </div>
        </div>
    );
}