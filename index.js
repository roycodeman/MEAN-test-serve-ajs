var express = require('express'),
    app = express(),
    favicon = require('serve-favicon'),
    path = require('path'),
    morgan = require('morgan'),
    router = require('./routes/initial');


/*
 * middlewares
 *
 */
app.use(morgan('dev')); // console logger for dev only
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

/*
 * routes
 *
 */
app.use('/', router);

// listening @ 3k port
app.listen(3000, function () {
  console.log('listening at port 3000...')
});