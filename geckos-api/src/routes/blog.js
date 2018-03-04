import express from 'express';
import Blog from '../models/Blog';

import * as blogController from '../controllers/blogController';
//import Blog from '../models/Blog';

const router = express.Router();

router.post('/', blogController.store);
router.get('/', blogController.index);
router.put('/news/:id', blogController.show);
router.delete('/news/:id', blogController.remove);

export default router;
