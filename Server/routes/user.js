import express from 'express';
import { adminRegistration, eventRegistration, registration } from '../control/user.js';

const userRouter = express.Router();

userRouter.post('/registration', registration);
userRouter.post('/adminRegistration', adminRegistration);
userRouter.post('/events', eventRegistration);

export default userRouter;