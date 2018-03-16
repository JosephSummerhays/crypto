var getPublicKey = () => {
  axios.get("/api/product").then(response=> {
    console.log("getPrimes");
    console.log(response);
  }).catch(err => {
  });
};

var getEncryptedMessage = () => {
  axios.get('/api/message').then(response=> {
    console.log("get encrypted");
    console.log(response);
  }).catch(err => {
  });
};

var setPrimes = (prime1, prime2) => {
  axios.put('/api/prime1/'+prime1).then(response=> {
    console.log("set first prime");
    console.log(response);
  }).catch (err=> {
  });
  axios.put('/api/prime2/'+prime2).then(response=> {
    console.log("set second prime");
    console.log(response);
  }).catch (err=> {
  });
};

var setMessage = (message) => {
  axios.put('/api/message/' + message).then(response=> {
    console.log("setMessage");
    console.log(response);
    getEncryptedMessage();
  }).catch(err => {
  });
}
