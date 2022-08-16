const express = require('express');
const rescue = require('express-rescue');

const { errorMiddleware, errorHandler } = require('./middlewares');
const { loginRouter } = require('./routes/loginRoute');
const { userRoute } = require('./routes/userRoute');
const { categoryRoute } = require('./routes/categoryRoute');
const { postRoute } = require('./routes/postRoute');

const app = express();

app.use(express.json());

app.use('/', rescue(loginRouter));
app.use('/', rescue(userRoute));

app.use('/', rescue(categoryRoute));
app.use('/', rescue(postRoute));

app.use(errorMiddleware, errorHandler);

module.exports = app;
