function tampilParagraf() {
    var doc = document;
    var p = doc.createElement("p");
    console.log(p.innerText);
    p.innerText = "Halo Bro!!";
    p.style.fontSize = "20px";
    // p.id = 'halo' //other method to define attribute id
    // p.className = 'paragraf'
    p.setAttribute("id", "halo");
    p.setAttribute("class", "paragraf");
    if (!doc.getElementById("halo")) {
      doc.body.appendChild(p);
    }
  }
  