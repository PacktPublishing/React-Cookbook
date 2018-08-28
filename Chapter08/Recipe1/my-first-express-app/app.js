// Dependencies
import express from 'express';
import path from 'path';

// Controllers
import apiController from './controllers/api';

// Express Application
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', apiController);

// Listening port
app.listen(3000);
