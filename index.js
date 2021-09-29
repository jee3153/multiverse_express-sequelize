require('dotenv').config();

const express = require('express');
const setupDb = require('./setupDb');
const app = express();
const port = process.env.PORT || 3000;

const User = require('./models/user');

const usersRouter = require('./routers/users');
const companiesRouter = require('./routers/companies');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', usersRouter);
app.use('/companies', companiesRouter);

// setupDb(app, port);

module.exports = app;
