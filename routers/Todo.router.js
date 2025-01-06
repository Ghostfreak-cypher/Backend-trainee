import { Router } from 'express';
import create from '../controllers/Todo.controller.js';
import read from '../controllers/Todo.controller.js';
import update from '../controllers/Todo.controller.js';
import remove from '../controllers/Todo.controller.js';

const router = Router();

router.post('/create', create);
router.get('/read', read);
router.put('/update', update);
router.delete('/delete', remove);
export default router;