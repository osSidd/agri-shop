var createError = require('http-errors');
const express = require('express')
var logger = require('morgan');
var dotenv = require('dotenv')
dotenv.config()

const productRouter = require('./routes/product')
const usersRouter = require('./routes/user')

//initialize express
const app = express();

//app level middleware
app.use(logger('dev'))
app.use(express.json())

//routes
app.use('/products', productRouter)
app.use('/users', usersRouter)


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

module.exports = app

/**
var path = require('path');

var helmet = require('helmet')
var cookieParser = require('cookie-parser');
const cors = require('cors')

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(cors({origin: true, credentials: true}))
// app.use(helmet())

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/images/blog', express.static(path.join(__dirname, 'uploads/blogs/cover')))
app.use('/images/user', express.static(path.join(__dirname, 'uploads/users')))
 * 
 */