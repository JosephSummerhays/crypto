const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

let prime1=0;
let prime2=0;
let message="NULL";


app.get('/api/correct/:message', function(request, response) {
  response.send([request.params.dec===message]);
});

app.get('/api/product', function(request, response) {
  response.send([prime1*prime2]);
});

app.get('/api/message', function(request, response) {
  response.send([message]);
});

app.put('/api/prime1/:newPrime', function(request, response) {
  prime1 = request.params.newPrime;
  response.send([prime1]);
  console.log("prime1=" + prime1);
});
app.put('/api/prime2/:newPrime', function(request, response) {
  prime2 = request.params.newPrime;
  response.send([prime2]);
  console.log("prime2=" + prime2);
});

app.put('/api/message/:message', function(request, response) {
  message = request.params.message;
  response.send([message]);
  console.log("message = " + message);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
