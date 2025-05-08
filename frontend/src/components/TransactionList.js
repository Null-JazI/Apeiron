import { useState } from "react";

export default function TransactionList() {
  const [transactions, setTransactions] = useState([
  ]);

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      {transactions.map((tx) => (
        <div key={tx.id} className="p-2 flex justify-between border-b">
          <span>Transaction ID: {tx.id}</span>
          <span className="text-green-600 font-bold">{tx.amount}</span>
        </div>
      ))}
    </div>
  );
}
