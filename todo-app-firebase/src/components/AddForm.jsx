import React from "react";

export default function AddForm({
  type,
  setType,
  title,
  setTitle,
  amount,
  setAmount,
  category,
  setCategory,
  categories,
  handleAdd,
}) {
  const isFormInvalid = !title || !amount || !category;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd();
      }}
      className="bg-white p-6 rounded-2xl shadow-xl space-y-5 border border-gray-100"
    >
      <h2 className="text-2xl font-extrabold text-indigo-700 text-center mb-5 border-b pb-3">
        New Transaction
      </h2>

      {/* Type Toggle */}
      <div className="flex justify-center rounded-xl bg-gray-100 p-1">
        <button
          type="button"
          onClick={() => setType("income")}
          className={`flex-1 px-4 py-2 text-sm rounded-lg font-semibold transition ${
            type === "income"
              ? "bg-white text-green-600 shadow-md ring-1 ring-green-300"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          ➕ Income
        </button>
        <button
          type="button"
          onClick={() => setType("expense")}
          className={`flex-1 px-4 py-2 text-sm rounded-lg font-semibold transition ${
            type === "expense"
              ? "bg-white text-red-600 shadow-md ring-1 ring-red-300"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          ➖ Expense
        </button>
      </div>

      {/* Input Fields */}
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title/Name</label>
          <input
            id="title"
            type="text"
            placeholder="e.g., Monthly Salary"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-3 text-gray-800 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            required
          />
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Amount ($)</label>
          <input
            id="amount"
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-3 text-gray-800 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            min="0.01"
            step="0.01"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-3 text-gray-800 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 cursor-pointer appearance-none bg-white pr-8"
            required
          >
            <option value="" disabled>
              Select {type} category
            </option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={isFormInvalid}
        className={`w-full py-3 rounded-xl text-white font-bold transition duration-300 ease-in-out ${
          isFormInvalid
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg"
        }`}
      >
        Save Transaction
      </button>
    </form>
  );
}