import { Router } from 'express';
import { create, getUsers } from '../controllers/user';

export const router = Router();

router.post('/', create);
router.get('/users', getUsers);
