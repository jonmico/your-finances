import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Account } from '../models/account';
import { User } from '../models/user';

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
      res.status(400).json({ error: 'Invalid userId.' });
    }

    const account = await Account.create({ name, ownerId, balance });

    res.status(201).json(account);
  } catch (err) {
    next(err);
  }
}
