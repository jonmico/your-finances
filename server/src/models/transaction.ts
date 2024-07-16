import mongoose, { Schema } from 'mongoose';

const transactionSchema = new Schema({
  amount: { type: Number, required: true },
  name: { type: String, required: true },
  ownerId: { type: Schema.Types.ObjectId, required: true },
  accountId: { type: Schema.Types.ObjectId, required: true },
  type: { type: String, required: true },
});

export const Transaction = mongoose.model('Transaction', transactionSchema);
