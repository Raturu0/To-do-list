// Ambil button menginput nama
const buttonNama = document.querySelector(".buttonNama");

// Ambil tag inputan nama
const inputanNama = document.querySelector("#nama");

// Ambil h2 untuk ganti nama
const h2Nama = document.querySelector(".blue h2")

// Ambil button menambah daftar
const add = document.querySelector(".add");

// Ambil ul
const ul = document.querySelector("ul");

let i = 0;
add.addEventListener("click", function () {
  const inputan = document.querySelector(".inputan");
  console.log(inputan.value);

  // Ambil Li
  const li = document.createElement("li");
  // Isikan text ke li
  const text_li = document.createTextNode(`${i + 1}. ${inputan.value}`);
  i++;

  // Jika inputan kosong
  if (inputan.value == "") {
    alert("gagal menambahkan, silahkan mengisi inputan");
    i--;
    exit;
  }
  // masukkan text ke li
  li.appendChild(text_li);
  // masukkan li ke ul
  ul.appendChild(li);
  inputan.value = "";
});



ul.addEventListener("click", function(e) {
    const li = e.target.closest("li");
    if(li) {
        li.classList.toggle("garisTengah");
    }
});

buttonNama.addEventListener("click", function() {
    h2Nama.innerHTML = `Selamat datang, ${inputanNama.value}`;
});



