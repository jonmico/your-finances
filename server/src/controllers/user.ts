import { NextFunction, Request, Response } from 'express';
import { User } from '../models/user';

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { firstName, lastName, email } = req.body;

    const user = await User.create({ firstName, lastName, email });

    return res.json({ user });
  } catch (err) {
    // Placeholder error handler
    res.json({ error: `Something went wrong: ${err}` });
    next(err);
  }
}
