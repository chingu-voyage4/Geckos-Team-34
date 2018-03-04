import express from 'express';
import Blog from '../models/Blog';

import * as blogController from '../controllers/blogController';


const router = express.Router();

router.post('/', blogController.store);
router.get('/', blogController.index);
router.put('/:id', blogController.show);
router.delete('/:id', blogController.remove);

export default router;
