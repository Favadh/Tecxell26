import express from 'express';

const admitRouter = express.Router();

admitRouter.post('/adminLogin', (req, res) => {
  res.send('Admin route');
});

admitRouter.get('/registrationData', (req, res) => {
  res.send('Admin route');
});

admitRouter.get('/eventsStatus', (req, res) => {
  res.send('Admin route');
});


export default admitRouter;