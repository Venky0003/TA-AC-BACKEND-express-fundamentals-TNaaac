let express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('Welcome');
});
app.get('/about', (req, res) => {
  res.send('About page');
});
app.listen(3000, () => {
  console.log('Server Listening on Port 3k');
});
