/*
This file was originally designed to also handle the getting,
however I found it was impossible given my current knowledge
of javascript.

I needed the getter functions to return the value of the axios.get
AFTER it got it. but it would asynchronously return before completing the
call to the server. If I placed the return statement inside the
.then(function() {}) it would return from the anonymous function rather than
the overall function.

I don't know any other solutions to this promlem so I just moved the getters
to inside the cryptApp.js

*/

var setPrimes = (prime1, prime2) => {
  axios.put('/api/prime1/'+prime1).then(response=> {
  }).catch (err=> {
  });
  axios.put('/api/prime2/'+prime2).then(response=> {
  }).catch (err=> {
  });
};

var setMessage = (message) => {
  axios.put('/api/message/' + message).then(response=> {
  }).catch(err => {
  });
}
