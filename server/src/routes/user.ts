import { Router } from 'express';
import { create, getUserById, getUsers } from '../controllers/user';

export const router = Router();

router.post('/', create);
router.get('/users', getUsers);
router.get('/:userId', getUserById);
