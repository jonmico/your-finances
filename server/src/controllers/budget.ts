import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Budget } from '../models/budget';
import { AppError } from '../app-error';

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
      throw new AppError('Error creating budget.', 400);
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
    const { budgetId } = req.params;

    const budget = await Budget.findById(budgetId).exec();

    if (!budget) {
      throw new AppError('No budget found.', 400);
    }

    res.json({ budget });
  } catch (err) {
    next(err);
  }
}
