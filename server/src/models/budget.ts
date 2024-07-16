import mongoose, { Schema } from 'mongoose';

const budgetSchema = new Schema({
  name: { type: String, required: true },
  ownerId: { type: Schema.Types.ObjectId, required: true },
  amount: { type: Number, required: true },
});

export const Budget = mongoose.model('Budget', budgetSchema);
