import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import routes from './routes';

dotenv.config();
const app = express();

mongoose.connect(
  `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@ds239968.mlab.com:39968/geckos-dev`
);

app.use('/', routes);

app.listen(8080, () => {
  console.log('server started');
});