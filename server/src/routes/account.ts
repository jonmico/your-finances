import { Router } from 'express';
import { create, getAccountById } from '../controllers/account';

export const router = Router();

router.post('/', create);
router.get('/:accountId', getAccountById);
