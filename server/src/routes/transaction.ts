import { Router } from 'express';
import { create, getTransactionById } from '../controllers/transaction';

export const router = Router();

router.post('/', create);
router.get('/:transactionId', getTransactionById);
