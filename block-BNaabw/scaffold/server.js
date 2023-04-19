let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

app.use(logger('dev'));

app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie('username', 'venkat');
  next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.use('/admin', (req, res, next) => {
  next('Unauthorized access');
});

app.get('/users', (req, res) => {
  res.sendres.send('Welcome to express Assignment 2');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + '/gallery.html');
});

// 404 error handler

app.use((req, res, next) => {
  res.send('Page Not Found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(4000, () => {
  console.log('Server Listening on Port 4k');
});
