import { useEffect, useState } from 'react';
import { apiGetTransactionsByUserId } from '../services/transaction-api';
import { Transaction } from '../types/transaction';

export default function Transactions() {
  return (
    <div>
      <h1>This is the Transactions Page</h1>
      <TransactionList />
    </div>
  );
}

function TransactionList() {
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getTransactionsByUserId() {
      setIsLoading(true);
      const { data, error } = await apiGetTransactionsByUserId(
        '66968c5af99043de0e8d04a7'
      );
      setIsLoading(false);

      if (error) {
        console.error('Error:', error);
        setError(error);
        return;
      }

      if (data) {
        setTransactions(data.transactions);
      }
    }
    getTransactionsByUserId();
  }, []);

  if (isLoading) {
    return <div>Loading your transactions...</div>;
  }

  return (
    <div>
      {error && <div>{error}</div>}
      <div>
        <ul>
          {transactions?.map((transaction) => (
            <li key={transaction._id}>
              {transaction.transactionName}: {transaction.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
