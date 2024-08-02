import { NextFunction, Request, Response } from 'express';
import { User } from '../models/user';
import { AppError } from '../app-error';
import bcrypt from 'bcrypt';

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email }).exec();

    if (existingUser) {
      throw new AppError('User with that email already exists.', 400);
    }

    bcrypt.hash(password, 15, async (err, hash) => {
      if (err) {
        throw new AppError(err.message, 400);
      }

      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hash,
      });

      res.json({ user, userCreated: true });
    });
  } catch (err) {
    next(err);
  }
}

export async function getUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await User.find().exec();

    res.json({ users });
  } catch (err) {
    next(err);
  }
}

export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).exec();

    if (!user) {
      throw new AppError('User not found.', 400);
    }

    res.json({ user });
  } catch (err) {
    next(err);
  }
}
