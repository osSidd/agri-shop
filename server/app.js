var createError = require('http-errors');
var express = require('express');
var path = require('path');

var helmet = require('helmet')
var dotenv = require('dotenv')
dotenv.config()
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogsRouter = require('./routes/blogs');
var tagRouter = require('./routes/tags')
var commentRouter = require('./routes/comment')
var subscriberRouter = require('./routes/subscriber')

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(cors({origin: true, credentials: true}))
// app.use(helmet())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/images/blog', express.static(path.join(__dirname, 'uploads/blogs/cover')))
app.use('/images/user', express.static(path.join(__dirname, 'uploads/users')))
app.use('/api/blogs', blogsRouter);
app.use('/api/tags', tagRouter);
app.use('/api/comments', commentRouter);
app.use('/api/subscribe', subscriberRouter);
app.use('/users', usersRouter);

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
