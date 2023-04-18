let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/new.html');
});

app.post('/new', (req, res) => {
  //   console.log(req.body);
  //   res.send(req.body);
  let name = req.body.name;
  let email = req.body.email;
  let prof = req.body.prof;

  res.send(`Name:${name}  
  mail: ${email}
  Profession: ${prof}`);
});

app.get('/users/:username', (req, res) => {
  var username = req.params.username;
  res.send(username);
});

app.listen(5000, () => {
  console.log('Server running on port 5k');
});
