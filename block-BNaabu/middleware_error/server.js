let express = require('express');

let app = express();

app.use('/admin', (req, res, next) => {
  next('Unauthorized');
});

app.get('/', (req, res) => {
  res.send('Welcome to midlle ware error handlers');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.use((req, res, next) => {
  res.send('Page not found');
});

app.use((err, req, res, next) => {
  res.send(err);
});
app.listen(5000, () => {
  console.log('Server Listening on port 5k');
});
