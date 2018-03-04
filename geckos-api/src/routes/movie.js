import express from 'express';

import * as movieController from '../controllers/movieController';

const router = express.Router();

// router.get('/', movieController.index);
router.post('/', movieController.store);
// routher.get('/:moviesold', movieController.retrieve);
// router.put('/:moviesold', movieController.update);
// router.delete('/:moviesold', movieController.delete);

export default router;
