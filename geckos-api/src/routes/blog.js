import express from 'express';

import * as blogController from '../controllers/blogController';

const router = express.Router();

router.post('/', blogController.store);
router.get('/', blogController.index);

export default router;
