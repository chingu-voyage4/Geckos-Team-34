import express from 'express';

import * as movieController from '../controllers/movieController';

const router = express.Router();

router.get('/movies', movieController.index);
router.post('/movies', movieController.add);
routher.get('movies/:moviesold', movieController.retrieve);
router.put('/movies/:moviesold', movieController.update);
router.delete('movies/:moviesold', movieController.delete);

export default router;