// Ambil button
const add = document.querySelector(".add");

// Ambil ul
const ul = document.querySelector("ul");

let i = 0;
add.addEventListener("click", function() {
    const inputan = document.querySelector(".inputan");
    console.log(inputan.value);

    const li = document.createElement("li");
    // isi text
    const text_li = document.createTextNode(`${i+1}. ${inputan.value}`);
    i++;

    // Jika inputan kosong
    if(inputan.value == "") {
        alert("gagal menambahkan, silahkan mengisi inputan");
        i--;
        exit;
    }

    // masukkan text ke li
    li.appendChild(text_li);
    // masukkan li ke ul
    ul.appendChild(li);
    inputan.value = "";
})
