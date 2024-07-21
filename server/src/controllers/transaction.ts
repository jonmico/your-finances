import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';
import { AppError } from '../app-error';

interface ICreateBody {
  transactionName: string;
  amount: number;
  ownerId: mongoose.Types.ObjectId;
  accountData: {
    accountId: mongoose.Types.ObjectId;
  };
  budgetData?: {
    budgetId?: mongoose.Types.ObjectId;
    budgetName: string;
  };
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const {
      transactionName,
      amount,
      ownerId,
      accountData,
      budgetData,
    }: ICreateBody = req.body;

    const account = await Account.findById(accountData.accountId).exec();

    if (!account) {
      throw new AppError('Account not found.', 400);
    }

    const transaction = await Transaction.create({
      amount,
      transactionName,
      ownerId,
      accountData: {
        accountId: account._id,
        accountName: account.name,
      },
      budgetData: {
        budgetId: budgetData?.budgetId,
        budgetName: budgetData?.budgetName,
      },
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

export async function getTransactionsByUserId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req.params;

    const transactions = await Transaction.find({ ownerId: userId }).exec();

    if (!transactions) {
      console.error(transactions);
      throw new AppError('No transactions found.', 400);
    }

    res.json({ transactions });
  } catch (err) {
    next(err);
  }
}
