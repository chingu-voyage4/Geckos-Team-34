import express from 'express';

import * as authController from '../controllers/authController';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/confirmation', authController.confirm);
router.post('/password_reset', authController.resetPassword);
router.post('/validate_token', authController.validateToken);
router.post('/reset_user_password', authController.resetUserPassword);

export default router;
