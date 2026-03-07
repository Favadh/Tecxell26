import express from 'express';
import { adminLogin, getEventsStatus, getRegistrations } from '../control/admin.js';
import auth from '../middleware/auth.js';

const admitRouter = express.Router();

admitRouter.post('/adminLogin', adminLogin);

admitRouter.get('/registrationData', auth, getRegistrations);

admitRouter.get('/eventsStatus', auth, getEventsStatus);


export default admitRouter;