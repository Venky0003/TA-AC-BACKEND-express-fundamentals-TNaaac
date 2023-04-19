let express = require('express');

let app = express();

function Logger(req, res, next) {
  const time = Date.now();
  res.on('finish', () => {
    const endTime = Date.now() - time;
    console.log(
      `Response time for ${req.method} request to ${req.url}: ${endTime}ms`
    );
  });
  next();
}

app.use(Logger);

function jsonParser(req, res, next) {
  let store = '';
  req.on('data', (chunk) => {
    store = store + chunk;
  });
  req.on('end', () => {
    try {
      req.body = JSON.parse(store);
      next();
    } catch (err) {
      next(err);
    }
  });
}

app.use(jsonParser);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/json', (req, res) => {
  res.json(req.body);
});
app.listen(3000, () => {
  console.log('Server Listening on Port 3k');
});
