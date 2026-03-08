import express from 'express';
import { registration, getRegistration } from '../control/user.js';

const userRouter = express.Router();

userRouter.post('/registration', registration);
userRouter.get('/registration/:id', getRegistration);

export default userRouter;