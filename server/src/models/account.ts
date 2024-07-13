import mongoose, { Schema } from 'mongoose';

const accountSchema = new Schema({
  name: { type: String, required: true },
  balance: { type: Number, default: 0 },
  ownerId: { type: Schema.Types.ObjectId, required: true },
});

export const Account = mongoose.model('Account', accountSchema);
