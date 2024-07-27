export interface Transaction {
  _id: string;
  amount: number;
  transactionName: string;
  ownerId: string;
  accountData: { accountId: string; accountName: string };
  budgetData?: { budgetId: string; budgetName: string };
}
