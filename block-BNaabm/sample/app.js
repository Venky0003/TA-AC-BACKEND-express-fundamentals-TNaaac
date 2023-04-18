let express = require('express');

let app = express();

app.use('/', (req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to express.js');
});

app.listen(4000, () => {
  console.log('Server listening on Port 4k');
});
