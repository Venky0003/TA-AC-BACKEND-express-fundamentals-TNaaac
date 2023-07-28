let express = require('express');

let app = express(); //express

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(3000, () => {
  console.log('Server Listening on Port 3k');
});

// testing
