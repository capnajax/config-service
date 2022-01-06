import createError from 'http-errors';
import express, { urlencoded } from 'express';
import { join } from 'path';
import logger from 'morgan';

import configRouter from '../routes/config.js';

const __dirname = new URL('.', import.meta.url).pathname;

const app = express();

app.set('query parser', 'simple');

app.use(logger('dev'));
app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, 'public')));

app.use('/config', configRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log('error path');
  res.sendStatus(err.status || 500);
});

export default app;
