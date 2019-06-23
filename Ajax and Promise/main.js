var orang = {
    namaDepan: "Abdul Fattah",
    namaBelakang: "Ikhsan",
    namaPanjang: function() {
      console.log("ini", this); // referensi ke objek orang
      // sama aja jadi -> orang.namaDepan
      var diriSendiri = this;
      setTimeout(function() {
        console.log(this); // referensi ke global window object
        console.log(diriSendiri.namaDepan + " " + diriSendiri.namaBelakang);
      }, 3000);
      // return this.namaDepan + " " + this.namaBelakang
    },
    fullName: function() {
      // pakai arrow function untuk set `this` ke object itu sendiri
      setTimeout(() => {
        console.log(this); // referensi ke objek orang
        console.log(this.namaDepan + " " + this.namaBelakang);
      }, 3000);
      // return this.namaDepan + " " + this.namaBelakang
    }
  };
  orang.namaDepan;
  orang.namaBelakang;
  
  var namaDepansjhdfhdsf = "namaDepan";
  var namaBelakangshdhfjdfh = "namaBelakang";
  
  orang["namaDepan"];
  orang["namaBelakang"];
  // kelebihan akses objek menggunakan objek[property] / objek[key]
  // yaitu bisa dinamis, dengan cara passing variable
  console.log(orang[namaDepansjhdfhdsf]);
  console.log(orang.namaPanjang());
  console.log(orang.fullName());
  
  function temukanBarangSaya(obj, key) {
    console.log(this);
    return obj[key];
  }
  console.log(temukanBarangSaya(orang, "namaBelakang"));
  // cek property atau key sebuah objek
  function ngecekObjek(obj, key) {
    if (typeof obj === "object" && obj !== null && obj.hasOwnProperty(key)) {
      return obj[key];
    }
    return "ga nemu";
  }
  
  console.log('check obj' + ngecekObjek(orang, "namaBelakang"));
  console.log(ngecekObjek(orang, "jhfsdjjd"));
  console.log(ngecekObjek(null, "namaDepan"));
  
  // point ke 3
  // function bisa mengembalikan function
  function a() {
    return function() {
      console.log("hai");
    };
  }
  
  // a()()
  var j = a();
  j();
  
  // point ke 1
  // bisa di masukkan sebagai parameter
  // sebuah function
  function b() {
    console.log("halo");
  }
  
  function c(fn) {
    fn();
  }
  
  c(b);
  
  // point ke 2
  // function bisa di masukan
  // ke dalam variable
  var d = function() {
    console.log("cuy");
  };
  d();
  