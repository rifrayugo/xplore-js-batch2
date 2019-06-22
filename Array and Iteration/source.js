let personData = [
    {
      id: 1,
      nama: "Tasya",
      pekerjaan: "artis"
    },
    {
      id: 2,
      nama: "Baim",
      pekerjaan: "penyanyi"
    },
    {
      id: 3,
      nama: "Doni",
      pekerjaan: "karyawan"
    },
    {
      id: 4,
      nama: "Andika",
      pekerjaan: "pengusaha"
    },
    {
      id: 5,
      nama: "Wawan",
      pekerjaan: "jurnalis"
    }
  ];
  
  let container = document.getElementsByClassName("container-fluid");
  let ul = document.createElement("ul");
  ul.className = "list-group";
  container[0].appendChild(ul);
  for (let index = 0; index < personData.length; index++) {
    const data = personData[index];
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = `${data.nama} - ${data.pekerjaan}`;
    ul.appendChild(li);
  }
  
  function onEnter(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      let value = event.target.value.trim().toLowerCase();
      let li = ul.getElementsByTagName("li");
      for (let index = 0; index < li.length; index++) {
        let el = li[index];
        let text = el.innerText.toLowerCase();
        let searchResult = text.indexOf(value);
        if (searchResult === -1) {
          el.style.display = "none";
        } else {
          el.style.display = "inherit";
        }
      }
    }
  }
  