function tampilParagraf() {
    var doc = document;
    // remove element hello if exist
    if (doc.getElementById("halo")) {
      var element = doc.getElementById("halo");
      doc.body.removeChild(element);
    }
    var p = doc.createElement("p");
    let searchValue= doc.getElementById("search").value;
    p.innerText = "Halo " + searchValue;
    p.style.fontSize = "20px";
    // p.id = 'halo'
    // p.className = 'paragraf'
    p.setAttribute("id", "halo");
    p.setAttribute("class", "paragraf");
    if (!doc.getElementById("halo")) {
      doc.body.appendChild(p);
    }
  }
  
  function search(event) {
    if (event.keyCode === 13) {
      tampilParagraf();
    }
  }
  