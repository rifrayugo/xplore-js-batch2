// var adamakananA = "mcD paket panas"
var adamakananA = null

var promise1 = new Promise(function(resolve, reject) {
  // butuh waktu untuk beli makanan A
  setTimeout(function() {
    if (adamakananA) {
        resolve('Ayah, Aku sudah membeli makanannya!');
    } else {
        reject('Riing, Ayah uangnya jatuh di jalan!');
    }
  }, 300);
});

// promise1.then(function success(value) {
//   console.log(value);
// }, function failed(error) {
//   console.log(error);
// });

promise1.then(function(success) {
    console.log(success);
}).catch(function (err) {
    console.log(err);
})
console.log(promise1);