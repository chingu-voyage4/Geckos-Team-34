import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import routes from './routes';
import authRoutes from './routes/auth';
import movieRoutes from './routes/movie';
import blogRoutes from './routes/blog';

dotenv.config();
const app = express();

mongoose.connect(
  `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@ds239968.mlab.com:39968/geckos-dev`
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);
app.use('/auth', authRoutes);
app.use('/movie', movieRoutes);
app.use('/news', blogRoutes);

export default app;
