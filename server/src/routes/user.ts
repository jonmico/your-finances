import { Router } from 'express';
import { create } from '../controllers/user';

export const router = Router();

router.post('/create', create);
