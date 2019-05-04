process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const app = express();
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

// Serve static content
app.use(express.static(__dirname));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Common Error Handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV === 'development' ? err : {};
    console.error('\nError:', err, '\n');
    res.status(err.status || 500);
    res.json({
        success: false,
        message: err.message,
        status: err.status
    });
});

app.listen(PORT, function (err) {
    if (err) console.error('Could not start server: \nError:\n', err);
    console.log('Server listening on port:', PORT);
});