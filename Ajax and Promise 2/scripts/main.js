/* eslint-disable strict*/
"use strict";

(function() {
  // inisialisasi endpoint API URL
  const API_URL =
    "https://newsapi.org/v2/everything?q=detik&sortBy=publishedAt&apiKey=a6ff111546c0411f9228e774270964e3";

  // const hh = 'https://newsapi.org/v2/everything?q=' + userinput + '&sortBy=publishedAt&apiKey=a6ff111546c0411f9228e774270964e3'

  // set loading
  // <p>Loading...</p>
  var loading = document.createElement("div");

  var row = document.getElementsByClassName("row")[0];

  loading.innerText = "loading";
  document.body.appendChild(loading);

  // Buat function list berita, dibawah komen ini
  function listBerita(response) {
    // console.log(response);
    // hide loading
    loading.style.display = "none";
    // masukkan response.data ke dalam DOM
    // ingat response.data adalah array object
    var articles = response.data.articles;
    for (let index = 0; index < articles.length; index++) {
      var column = document.createElement("div");
      var card = document.createElement("div");
      var img = document.createElement("img");
      var cardBody = document.createElement("div");
      var title = document.createElement("h4");
      var author = document.createElement("h6");
      var detail = document.createElement("h6");
      var penerbitBerita = document.createElement("h6");
      var isi = document.createElement("p");
      var href = document.createElement("a");

      // set atrribute
      column.setAttribute("class", "col-4");
      card.setAttribute("class", "card");
      img.setAttribute("class", "card-img-top");
      cardBody.setAttribute("class", "card-body");
      title.setAttribute("class", "card-title title");
      author.setAttribute("class", "class-title author");
      detail.setAttribute("class", "card-title detail");
      penerbitBerita.setAttribute("class", "card-title penerbit");
      isi.setAttribute("class", "card-text");
      href.setAttribute("class", "btn btn-primary");

      title.innerText = articles[index].title;
      // detail
      detail.innerText = articles[index].description;
      //author
      author.innerText = articles[index].author;
      // image
      img.src = articles[index].urlToImage;

      // penerbitBerita
      penerbitBerita.innerText = articles[index].source.name;

      // isi
      isi.innerText = articles[index].content;

      // link
      href.href = articles[index].url;
      href.innerText = "See more...";

      //masukkan kedalam Card Body
      cardBody.appendChild(title);
      cardBody.appendChild(detail);
      cardBody.appendChild(isi);
      cardBody.appendChild(penerbitBerita);
      cardBody.appendChild(href);

      //masukkan kedalam Card
      card.appendChild(img);
      card.appendChild(cardBody);

      //masukkan kedalam Column-4
      column.appendChild(card);

      //masukkan kedalam Row
      row.appendChild(column);
    }
  }

  // Buat funct,ion error
  function tampungError(error) {
    // hide loading
    loading.style.display = "none";
    // console.log(error.message);
    var paragraph = document.createElement("p");
    paragraph.innerText = error.message;
    row.appendChild(paragraph);
  }

  // request berita via axios dan masukkan function list berita di success
  // dan taro function error di catch
  // API link: https://newsapi.org/v2/everything?q=detik&sortBy=publishedAt&apiKey=a6ff111546c0411f9228e774270964e3
  axios
    .get(API_URL)
    .then(listBerita)
    .catch(tampungError);
  //Fungsi search saat enter
  //Fungsi search saat tekan button search
  var cari = document.getElementById("form-search");
  cari.addEventListener("submit", function(event) {
    // console.log(event);
    // console.log(event.target.children.search.value.trim());
    event.preventDefault(); // stop behavior browser
    var target = event.target.children.search.value.trim().toLowerCase(); // user input
    loading.style.display = "inherit";
    // console.log(row.children);
    // convert ke array
    var children = [].slice.call(row.children);
    // loop via forEach
    // hapus list sebelumnya
    children.forEach(function(child) {
      child.remove();
    });
    if (target !== "") {
      let API_URL =
        "https://newsapi.org/v2/everything?q=" +
        target +
        "&sortBy=publishedAt&apiKey=a6ff111546c0411f9228e774270964e3";
      axios
        .get(API_URL)
        .then(listBerita)
        .catch(tampungError);
    } else {
      axios
        .get(API_URL)
        .then(listBerita)
        .catch(tampungError);
    }
  });
})();

// console.log(column);
