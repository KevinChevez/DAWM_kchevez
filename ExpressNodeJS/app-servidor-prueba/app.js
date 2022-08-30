var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Cors
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var apiRouter = require('./routes/api');
var reportsRouter = require('./routes/reports');

//Needed variables to show messasges with flush
var session = require('express-session');
var flush = require('connect-flash');

//Referencia a middleware
var auth = require('./middlewares/auth');

//Referencia a  middleware de tracing
var tracing = require('./middlewares/tracing');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Usando cors
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Using session variable
// app.use(session({
//   secret: 'secret',
//   cookie: { maxAge: 60000 },
//   resave: false,
//   saveUninitialized: false,
// }));
app.use(session({
  secret: '2C44-4D44-WppQ38S',
  resave: true,
  saveUninitialized: false,
  // cookie: { maxAge: 60000 }
}));
app.use(flush());

app.use('/login', loginRouter);
app.use('/', auth, tracing,indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use('/reports', reportsRouter);

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
