const cookieParser = require('cookie-parser');
let express = require('express');
let logger = require('morgan');

let app = express();

app.use(logger('dev'));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.cookies);
  res.cookie('username', 'Venkat');
  next();
});

app.get('/about', (req, res) => {
  res.send('Welcome to third party Middlewares in express');
});

app.listen(5000, () => {
  console.log('Server is Listening on Port 5k');
});
