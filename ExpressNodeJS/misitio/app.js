var createError = require('http-errors');     // Manejo de errores por defecto
var express = require('express');             // Arquitectura de la app en Backend
var path = require('path');                   // Manejo de rutas
var cookieParser = require('cookie-parser');            // Manejo de cookies
var logger = require('morgan');                         // Registro (log) de acciones del servidor

var cors = require("cors");

var indexRouter = require('./routes/index');            // Carga del manejador de subrutas para la ruta raíz
var usersRouter = require('./routes/users');            // Carga del manejador de subrutas para la ruta users
var loginRouter = require('./routes/login');
var apiRouter = require('./routes/api');
var session = require('express-session');
var flush = require('connect-flash');

var app = express();                                    // Instaciacion del APP

// Vistas (Express JavaScript que seran renderizadas en HTML)
app.set('views', path.join(__dirname, 'views'));        // Ruta a los archivos físicos que contienen las vistas
app.set('view engine', 'ejs');                          // Motor de renderización - EJS

app.use(cors()); 

app.use(logger('dev'));                                 // Instanciación del registrador (logger) de acciones para el MODO DE DESARROLLO
app.use(express.json());                                // Este método se usa para analizar las solicitudes entrantes con cargas JSON y se basa en el analizador de cuerpo de mensajes HTTP.
app.use(express.urlencoded({ extended: false }));       // Analiza las requests entrantes con cargas codificadas y se basa en body-parser. 
app.use(cookieParser());                                // Manejo de cookies entre el cliente y el servidor 
app.use(express.static(path.join(__dirname, 'public')));// Registro de la ruta para archivos estáticos (imágenes, hojas de estilo, etc)
app.use(session({
  secret: 'secret',
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: false
}))
app.use(flush())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/api', apiRouter);

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
