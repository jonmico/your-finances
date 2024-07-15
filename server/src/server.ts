import express, { ErrorRequestHandler } from 'express';
import 'dotenv/config';
import { connectDB } from './db';
import { router as userRouter } from './routes/user';
import cors from 'cors';

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);

connectDB();

// 404 Error handler
app.use((req, res) => {
  res.status(404).json({
    errorMessage: 'Not found: 404 error.',
  });
});

// Catch-all error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(((err: Error, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err });
}) as ErrorRequestHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
