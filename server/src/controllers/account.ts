import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Account } from '../models/account';
import { User } from '../models/user';
import { AppError } from '../app-error';

interface ICreateBody {
  name: string;
  balance?: number;
  ownerId: mongoose.Types.ObjectId;
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, balance, ownerId }: ICreateBody = req.body;

    const user = await User.findById(ownerId);

    if (!user) {
      throw new AppError('Invalid userId.', 400);
    }

    const account = await Account.create({ name, ownerId, balance });

    res.status(201).json(account);
  } catch (err) {
    next(err);
  }
}

export async function getAccountById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { accountId } = req.params;

    const account = await Account.findById(accountId).exec();

    if (!account) {
      throw new AppError('Account not found.', 400);
    }

    res.json({ account });
  } catch (err) {
    next(err);
  }
}
