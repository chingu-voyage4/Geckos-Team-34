import express from 'express';

import * as blogController from '../controllers/blogController';

const router = express.Router();

router.post('/', blogController.store);
router.get('/', blogController.index);
router.get('/:id', blogController.show);
router.put('/:id', blogController.edit);
router.delete('/:id', blogController.destroy);

export default router;
