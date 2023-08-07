//DOM manipulation

//1. membuat elemen baru
const pBaru = document.createElement("p");
// const textBaru = document.createTextNode("paragrap baru");
pBaru.textContent="wanda";

//2. simpan teks ke dalam paragraf
// pBaru.appendChild(textBaru);

//3. simpan paragraf baru di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

//membuat element baru li
// const li = document.createElement("li");
// const teksBaru = document.createTextNode("li baru");

// li.appendChild(teksBaru);

//simpan li baru
// const sectionB = document.querySelector("section#b ul");
// const li2 =sectionB.querySelector("li:nth-child(2)");

// sectionB.insertBefore(li,li2);

// const link = document.getElementsByTagName("a")[0];
// sectionA.removeChild(link);


// const sectionB2 = document.getElementById("b");
// const p2 =sectionB2.querySelector("p");

// const h2 = document.createElement("h2");
// const h2Texs = document.createTextNode("teks h2 baru !");
// h2.appendChild(h2Texs);

// sectionB2.replaceChild(h2,p2);
