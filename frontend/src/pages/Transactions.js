import TransactionList from "../components/TransactionList";

export default function Transactions() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Your Transactions</h2>
      <TransactionList />
    </div>
  );
}
