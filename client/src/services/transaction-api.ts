import { Transaction } from '../types/transaction';

export async function apiGetTransactionsByUserId(
  userId: string
): Promise<{ transactions: Transaction[] } | undefined> {
  try {
    const res = await fetch(
      `http://localhost:3000/api/transaction/user/${userId}`
    );

    if (!res.ok) {
      throw new Error('Error fetching transactions.');
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
