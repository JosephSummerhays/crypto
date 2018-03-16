var decrypt = (toDecrypt, encryptionKey) => {
  var toReturn = "";
  encryptionKey = encryptionKey % 96;
  for (var i = 0; i < toDecrypt.length; i++) {
    var c= toDecrypt.charCodeAt(i) - encryptionKey;
    if (c < 32) {
      c+= 96;
    }
    toReturn += String.fromCharCode(c);
  }
  return toReturn;
};

var app = new Vue({
  el: '#app',
  data: {},
  created: () => {
    setPrimes(7, 13);
    getPrimes();
    /*var enc = "encrypted";
    var key = 1;
    enc = encrypt(enc, key);
    console.log(enc);
    enc = decrypt(enc, key);
    console.log(enc);*/
  },
  computed: {},
  methods: {},
});
