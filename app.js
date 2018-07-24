var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//ENLACES DE LA PÁGINA PRINCIPAL
var noticiasRouter = require('./routes/noticias');
var encuentraCargaRouter = require('./routes/encuentraCarga');
var publicaCargaRouter = require('./routes/publicaCarga');
var nosotrosRouter = require('./routes/nosotros');
var ingresaRouter = require('./routes/ingresa');


//ENLACES DE LOS ENSAYOS
var codigo1Router = require('./routes/noticias/codigo1');
var codigo2Router = require('./routes/noticias/codigo2');
var codigo3Router = require('./routes/noticias/codigo3');
var codigo4Router = require('./routes/noticias/codigo4');
var codigo5Router = require('./routes/noticias/codigo5');
var codigo6Router = require('./routes/noticias/codigo6');
var codigo7Router = require('./routes/noticias/codigo7');
var codigo8Router = require('./routes/noticias/codigo8');
var codigo9Router = require('./routes/noticias/codigo9');
var codigo10Router = require('./routes/noticias/codigo10');
var codigo11Router = require('./routes/noticias/codigo11');
var codigo12Router = require('./routes/noticias/codigo12');
var codigo13Router = require('./routes/noticias/codigo13');
var codigo14Router = require('./routes/noticias/codigo14');
var codigo15Router = require('./routes/noticias/codigo15');
var codigo16Router = require('./routes/noticias/codigo16');
var codigo17Router = require('./routes/noticias/codigo17');
var codigo18Router = require('./routes/noticias/codigo18');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Enrutamiento de la página principal
app.use('/noticias', noticiasRouter);
app.use('/encuentraCarga', encuentraCargaRouter);
app.use('/publicaCarga', publicaCargaRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/ingresa', ingresaRouter);




//Enrutamiento de los ENSAYOS
app.use('/1', codigo1Router);
app.use('/2', codigo2Router);
app.use('/3', codigo3Router);
app.use('/4', codigo4Router);
app.use('/5', codigo5Router);
app.use('/6', codigo6Router);
app.use('/7', codigo7Router);
app.use('/8', codigo8Router);
app.use('/9', codigo9Router);
app.use('/10', codigo10Router);
app.use('/11', codigo11Router);
app.use('/12', codigo12Router);
app.use('/13', codigo13Router);
app.use('/14', codigo14Router);
app.use('/15', codigo15Router);
app.use('/16', codigo16Router);
app.use('/17', codigo17Router);
app.use('/18', codigo18Router);



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