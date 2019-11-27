import express from 'express';
import validate from '../middleware/auth';
import userController from '../controllers/usersController';

const router = express.Router();
router.post('/auth/signup', validate.validateUser,validate.checkUserExist, userController.newComer);

export default router;