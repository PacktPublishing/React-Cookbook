import express from 'express';

const router = express.Router();

// Mock data, this should come from a database....
const todo = [
  {
    id: 1,
    title: 'Go to the Gym'
  },
  {
    id: 2,
    title: 'Dentist Appointment'
  },
  {
    id: 3,
    title: 'Finish homework'
  }
];

router.get('/todo/list', (req, res, next) => {
  res.json({
    response: todo
  });
});

export default router;
