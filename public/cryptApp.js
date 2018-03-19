const START_VALID_ASCII_RANGE = 48;
const LENGTH_VALID_ASCII_RANGE = 79;

var convert = function(toConvert) {
  var toReturn = "";
  for (var i = 0; i < toConvert.length; i++) {
    if (toConvert.charAt(i) === " "){
      toReturn += "_";
    }
    else {
      toReturn += toConvert.charAt(i);
    }
  }
  return toReturn;
}

var decrypt = function (toDecrypt, decryptionKey) {
  console.log("*****************");
  console.log(toDecrypt+" "+decryptionKey);
  let toReturn = "";
  toDecrypt = convert(toDecrypt);
  let key = Number(decryptionKey);
  key = key % 96;
  for (var i = 0; i < toDecrypt.length; i++) {
    var c = toDecrypt.charCodeAt(i) - key;
    console.log(c);
    if (c < START_VALID_ASCII_RANGE) {
      c+= LENGTH_VALID_ASCII_RANGE;
    }
    toReturn += String.fromCharCode(c);
    console.log(toReturn);
  }
  return toReturn;
}

var encrypt = function (toEncrypt, encryptionKey) {
  console.log("*****************");
  console.log(toEncrypt);
  let key = Number(encryptionKey);
  toEncrypt = convert(toEncrypt);
  let toReturn = "";
  for(var i = 0; i < toEncrypt.length; i++) {
    let c = toEncrypt.charCodeAt(i);
    console.log(c);
    c -= START_VALID_ASCII_RANGE;
    c += key;
    c = (c%LENGTH_VALID_ASCII_RANGE)+START_VALID_ASCII_RANGE;
    toReturn += String.fromCharCode(c);
    console.log(toReturn);
  }
  return toReturn;
}


var app = new Vue({
  el: '#app',
  data: {
    prime1: 0,
    prime2: 0,
    message: "Enter Your message here",
    crypted: "",
    decrypted: "",
    publicKey: 0,
  },
  created: function() {
    //console.log(temp);
    //console.log(this.prime1);

    axios.get("/api/product").then(response=> {
      this.publicKey = response.data[0];
    }).catch(err => {
    });

    axios.get('/api/message').then(response=> {
      this.crypted = response.data[0];
    }).catch(err => {
    });

  },
  watch: {

  },
  computed: {},
  methods: {
    setUp: function() {
      if (this.prime1 > this.prime2) {
        var key = this.prime1;
      }
      else {
        var key = this.prime2;
      }
      var encrypted = encrypt(this.message, key);
      setPrimes(this.prime1, this.prime2);
      setMessage(encrypted);
      this.prime1 = 0;
      this.prime2 = 0;
      this.message = "message accepted";
    },
    decrypt: function() {
      if (this.prime1 > this.prime2) {
        var key = this.prime1;
      }
      else {
        var key = this.prime2;
      }
      this.decrypted = decrypt(this.crypted, key);

    }
  },
});
