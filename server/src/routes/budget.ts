import { Router } from 'express';
import { create, getBudget } from '../controllers/budget';

export const router = Router();

router.post('/', create);
router.get('/:budgetId', getBudget);
