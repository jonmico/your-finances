import mongoose from 'mongoose';
import 'dotenv/config';

const DB_STRING = process.env.DB_STRING;

export async function connectDB() {
  try {
    if (!DB_STRING) {
      console.log('No DB_STRING provided.');
      return;
    }
    await mongoose.connect(DB_STRING);
    console.log('Successfully connected to the database.');
  } catch (err) {
    console.log(`Error connecting to the database: ${err}`);
  }
}
