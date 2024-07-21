import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';
import { AppError } from '../app-error';

interface ICreateBody {
  name: string;
  amount: number;
  ownerId: mongoose.Types.ObjectId;
  accountId: mongoose.Types.ObjectId;
  budgetId?: mongoose.Types.ObjectId;
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, amount, ownerId, accountId, budgetId }: ICreateBody =
      req.body;

    const account = await Account.findById(accountId).exec();

    if (!account) {
      throw new AppError('Account not found.', 400);
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

export async function getTransactionById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { transactionId } = req.params;

    const transaction = await Transaction.findById(transactionId).exec();

    if (!transaction) {
      throw new AppError('Transaction not found.', 400);
    }

    res.json({ transaction });
  } catch (err) {
    next(err);
  }
}
