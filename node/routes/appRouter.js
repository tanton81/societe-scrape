const express = require('express');
const appRouter = express.Router();

var societesRouter = require('./societeRouter');

appRouter.use('/societes', societesRouter);

module.exports = appRouter;

