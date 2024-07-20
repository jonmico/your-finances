import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Budget } from '../models/budget';
import { User } from '../models/user';

interface ICreateBody {
  name: string;
  ownerId: mongoose.Types.ObjectId;
  amount: number;
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, ownerId, amount }: ICreateBody = req.body;

    const budget = await Budget.create({ name, ownerId, amount });

    if (!budget) {
      res.status(400).json({ error: 'Error creating budget.' });
      return;
    }

    res.status(201).json({ budget });
  } catch (err) {
    next(err);
  }
}

export async function getBudget(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { ownerId, budgetId } = req.params;

    const user = await User.findById(ownerId).exec();

    if (!user) {
      res.status(400).json({ error: 'No user found.' });
      return;
    }

    const budget = await Budget.findById(budgetId).exec();

    if (!budget) {
      res.status(400).json({ error: 'No budget found.' });
      return;
    }

    // FIXME: Why doesn't this check work?

    // if (budget.ownerId !== user._id) {
    //   console.log(budget.ownerId);
    //   console.log(user._id);
    //   res.status(403).json({ error: 'Forbidden.' });
    //   return;
    // }

    res.json({ budget });
  } catch (err) {
    next(err);
  }
}
