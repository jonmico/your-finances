import express, { ErrorRequestHandler } from 'express';
import 'dotenv/config';
import { connectDB } from './db';
import { router as userRouter } from './routes/user';
import { router as accountRouter } from './routes/account';
import { router as transactionRouter } from './routes/transaction';
import { router as budgetRouter } from './routes/budget';
import cors from 'cors';
import { AppError } from './app-error';

const PORT = process.env.PORT;

const app = express();

// Server config
app.use(cors());
app.use(express.json());

// Routers
app.use('/api/user', userRouter);
app.use('/api/account', accountRouter);
app.use('/api/transaction', transactionRouter);
app.use('/api/budget', budgetRouter);

// Database connection
connectDB();

// 404 Error handler
app.use((req, res) => {
  res.status(404).json({
    errorMessage: 'Not found: 404 error.',
  });
});

// Catch-all error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(((err: Error | AppError, req, res, next) => {
  console.error({ message: err.message, stack: err.stack });

  const errStatus = err instanceof AppError ? err.statusCode : 500;

  res.status(errStatus).json({ error: err.message });
}) as ErrorRequestHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
