import express from 'express';
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
    errorMessage: 'Sorry, but we cannot find what you are looking for!',
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
