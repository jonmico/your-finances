/*
TODO: 
  Make some type of reusable api call/custom hook for easier error handling
  At a minimum, add actual error handling into this api call, fix typing, etc
*/
export async function apiGetTransactionsByUserId(userId: string): Promise<
  | {
      transactions: {
        _id: string;
        amount: number;
        transactionName: string;
        ownerId: string;
        accountData: { accountId: string; accountName: string };
        budgetData?: { budgetId: string; budgetName: string };
      }[];
    }
  | undefined
> {
  try {
    const res = await fetch(
      `http://localhost:3000/api/transaction/user/${userId}`
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
