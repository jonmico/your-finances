import { Router } from 'express';
import {
  create,
  getTransactionById,
  getTransactionsByUserId,
} from '../controllers/transaction';

export const router = Router();

router.post('/', create);
router.get('/:transactionId', getTransactionById);
router.get('/user/:userId', getTransactionsByUserId);
