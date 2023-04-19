let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();
app.use(cookieParser());
app.use((req, res, next) => {
  let count = req.cookies.count;
  if (count) {
    res.cookie('count', Number(count) + 1);
  } else {
    res.cookie('count', 1);
  }
  next();
});

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/client', (req, res, next) => {
  next('Unauthorized Page');
});

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to express</h1>`);
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.post('/form', (req, res) => {
  res.json(req.body);
});

app.post('/json', (req, res) => {
  let data = req.body;
  res.type('text/plain').send(JSON.stringify(data));
});

app.get('/users/:username', (req, res) => {
  var username = req.params.username;
  res.send(username);
});

app.use((req, res, next) => {
  res.send('Page Not Found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('Server Listening on port 5k');
});
