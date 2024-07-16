import { NextFunction, Request, Response } from 'express';
import { Transaction } from '../models/transaction';
import mongoose from 'mongoose';
import { User } from '../models/user';
import { Account } from '../models/account';

interface ICreateBody {
  name: string;
  amount: number;
  ownerId: mongoose.Types.ObjectId;
  accountId: mongoose.Types.ObjectId;
  budgetId?: mongoose.Types.ObjectId;
}

// Review this a bit.
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, amount, ownerId, accountId, budgetId }: ICreateBody =
      req.body;

    const user = await User.findById(ownerId);

    if (!user) {
      res.status(400).json({ error: 'User not found.' });
      return;
    }

    const account = await Account.findById(accountId);

    if (!account) {
      res.status(400).json({ error: 'Account not found.' });
      return;
    }

    const transaction = await Transaction.create({
      amount,
      name,
      ownerId,
      accountId,
      budgetId,
    });

    account.balance += transaction.amount;

    await account.save();

    res.status(201).json({ transaction, account });
  } catch (err) {
    next(err);
  }
}
