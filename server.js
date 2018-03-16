const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

let prime1=0;
let prime2=0;
let message="NULL";
let encoded=message;

var encrypt = (toEncrypt, encryptionKey) => {
  var toReturn = "";
  for(var i = 0; i < toEncrypt.length; i++) {
    let c = toEncrypt.charCodeAt(i);
    c -= 32;
    c+= encryptionKey;
    c = (c%96)+32;
    toReturn += String.fromCharCode(c);
  }
  return toReturn;
};

app.get('/api/product', (request, response) => {
  response.send([prime1*prime2]);
});

app.get('/api/message', (request, response) => {
  response.send([encoded]);
});

app.put('/api/prime1/:newPrime', (request, response) => {
  prime1 = request.params.newPrime;
  response.send([prime1]);
});
app.put('/api/prime2/:newPrime', (request, response) => {
  prime2 = request.params.newPrime;
  response.send([prime2]);
});

app.put('/api/message/:message', (request, response) => {
  message = request.params.message;
  /*encoded = encode(message)*/
  encoded = encrypt(message, prime2);
  response.send([encoded]);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
