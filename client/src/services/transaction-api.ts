import { Transaction } from '../types/transaction';
import { handleFetch } from '../utils/handleFetch';

export async function apiGetTransactionsByUserId(userId: string): Promise<{
  data: { transactions: Transaction[] } | undefined;
  error: string | undefined;
}> {
  const { data, error } = await handleFetch<{
    transactions: Transaction[];
  }>(() => fetch(`http://localhost:3000/api/transaction/user/${userId}`));

  return { data, error };
}
