const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('./redis');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' },
}));

module.exports = app;
