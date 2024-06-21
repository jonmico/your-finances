import express from 'express';
import 'dotenv/config';
import { connectDB } from './db';

const PORT = process.env.PORT;

const app = express();

connectDB();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
