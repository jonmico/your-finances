import { Router } from 'express';
import { create } from '../controllers/account';

export const router = Router();

router.post('/', create);
