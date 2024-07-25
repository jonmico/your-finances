import { useEffect, useState } from 'react';
import { apiGetTransactionsByUserId } from '../services/transaction-api';

interface ITransaction {
  _id: string;
  amount: number;
  transactionName: string;
  ownerId: string;
  accountData: { accountId: string; accountName: string };
  budgetData?: { budgetId: string; budgetName: string };
}

export default function Transactions() {
  return (
    <div>
      <h1>This is the Transactions Page</h1>
      <TransactionList />
    </div>
  );
}

function TransactionList() {
  const [transactions, setTransactions] = useState<ITransaction[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getTransactionsByUserId() {
      setIsLoading(true);
      const data = await apiGetTransactionsByUserId('66968c5af99043de0e8d04a7');
      setIsLoading(false);

      if (!data) {
        console.error("I don't even know what to type here.");
        setError('AHHHH');
        return;
      }

      setTransactions(data.transactions);
    }
    getTransactionsByUserId();
  }, []);

  if (isLoading) {
    return 'Loading your transactions...';
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
