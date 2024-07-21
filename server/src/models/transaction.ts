import mongoose, { Schema } from 'mongoose';

const transactionSchema = new Schema({
  amount: { type: Number, required: true },
  transactionName: { type: String, required: true },
  ownerId: { type: Schema.Types.ObjectId, required: true },
  accountData: {
    accountId: { type: Schema.Types.ObjectId, required: true },
    accountName: { type: String, required: true },
  },
  budgetData: {
    budgetId: { type: Schema.Types.ObjectId },
    budgetName: { type: String },
  },
});

export const Transaction = mongoose.model('Transaction', transactionSchema);
