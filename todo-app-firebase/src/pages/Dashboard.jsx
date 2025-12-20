import React, { useState, useMemo } from "react";
import AddForm from "../components/AddForm";
import SummaryRow from "../components/SummaryRow";
import TransactionList from "../components/TransactionList";

export default function Dashboard() {
  const [type, setType] = useState("income");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  
  const [transactions, setTransactions] = useState([]);

  const incomeCategories = ["Salary", "Freelancing", "Investment", "Gift", "Other"];
  const expenseCategories = ["Rent", "Food", "Shopping", "Entertainment", "Traveling", "Utilities", "Other"];

  const handleAdd = () => {

    if (!title.trim() || !amount || !category) {
      alert("Please fill out all fields.");
      return;
    }

    const newItem = {
      id: Date.now(),
      type,
      title: title.trim(),
      amount: Number(amount), 
      category,
    };

    setTransactions([newItem, ...transactions]);
    setTitle("");
    setAmount("");
    setCategory("");
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((x) => x.id !== id));
  };

  
    const totalIncome = transactions
      .filter((x) => x.type === "income")
      .reduce((a, b) => a + b.amount, 0);

    const totalExpense = transactions
      .filter((x) => x.type === "expense")
      .reduce((a, b) => a + b.amount, 0);

    const netBalance = totalIncome - totalExpense;

   

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-indigo-800">
          Personal Finance Tracker
        </h1>
        <p className="text-gray-600 mt-1">Manage your money effectively.</p>
      </header>

     
      <SummaryRow income={totalIncome} expense={totalExpense} balance={netBalance} />


      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-10">
        <div className="lg:col-span-2">
          <AddForm
            type={type}
            setType={setType}
            title={title}
            setTitle={setTitle}
            amount={amount}
            setAmount={setAmount}
            category={category}
            setCategory={setCategory}
            categories={type === "income" ? incomeCategories : expenseCategories}
            handleAdd={handleAdd}
          />
        </div>
        <div className="lg:col-span-3">
          <TransactionList transactions={transactions} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}