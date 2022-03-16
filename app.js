var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/CXC");
require('./modelos/M_Cliente');

var indexRouter = require('./routes/index');
var clientesRouter = require('./routes/clientes');

var app = express();

const swaggerSpec = {
  definition: {
      openapi: "3.0.0",
      info: {
          title: "Examen Backend",
          version: "1.0.0",
      },
      servers: [{
          url: "http://127.0.0.1:3000/"
      }]
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`]
}
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
app.use("/api-doc",swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/clientes', clientesRouter);

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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
