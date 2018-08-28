// Dependencies
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// Controllers
import apiController from './controllers/api';

// Express Application
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose Connection
mongoose.connect('mongodb://localhost/blog');

// Routes
app.use('/api', apiController);

// Listening port
app.listen(3000);
